import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { TransferDataService } from "../services/transfer-data.service";
import { TransactionService } from "../services/transaction.service";
import { ThrowStmt } from "@angular/compiler";
import { ProductInfo } from "../models/productInfo";

@Component({
  selector: "app-course-cart",
  templateUrl: "./course-cart.component.html",
  styleUrls: ["./course-cart.component.scss"],
})
export class CourseCartComponent implements OnInit {
  checkoutInfo: FormGroup;
  coursesOnCart: any[] = [];
  coursesArray: any[] = []; 
  postingArray: any[] = [];
  uniqueCourses;
  totalPrice = 0;
  customer: any;
  ccDigits: any;
  date = new Date();
  receiptPrice = 0;
  paymentSuccess = 3;

  constructor(
    private _formBuilder: FormBuilder,
    private dataTransfer: TransferDataService,
    private ts: TransactionService
  ) { }

  ngOnInit() {
    this.coursesOnCart = this.dataTransfer.transactionObject;
    this.coursesArray = this.dataTransfer.transactionObject;
    console.log(this.coursesArray);

    this.getPriceTotal();
    this.generateArray();
    this.checkoutInfo = this._formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      creditCardNumber: ["", Validators.required],
      expirationDate: ["", Validators.required],
      ccv: ["", Validators.required],
      address: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zipCode: ["", Validators.required],
      country: ["", Validators.required],
    });
    console.log(this.coursesOnCart);
    console.log(this.coursesArray);
  }

  generateArray() {
    this.uniqueCourses = [];
    let product: ProductInfo;
    this.coursesOnCart.forEach((cart) => {
      console.log(cart);
      let counter = 0;
      product = new ProductInfo();
      product.id = cart.id;
      product.courseTitle = cart.title + " " + cart.subtitle;
      product.description = cart.included[0].description;
      product.date = cart.date
      product.unitPrice = cart.price;
      this.coursesArray.forEach((course) => {
        if (cart.id === course.id) {
          counter++;
          product.quantity = counter;
        }
        product.totalAmount = product.unitPrice * product.quantity;
      });
      if (!this.postingArray.includes(product)) {
        this.postingArray.push(product);
      }
    });

    const arr = [];
    arr.push(this.getUnique(this.postingArray, "id"));

    arr.forEach((r) => {
      r.forEach((p) => {
        this.uniqueCourses.push(p);
      });
    });
    // console.log(this.uniqueCourses);
  }

  getUnique(postingArray, comp) {
    // store the comparison  values in array
    const unique = postingArray
      .map((e) => e[comp])
      // store the indexes of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the false indexes & return unique objects
      .filter((e) => postingArray[e])
      .map((e) => postingArray[e]);
    return unique;
  }

  getCustomerData() {
    const ob = {
      customer: {
        firstName: this.checkoutInfo.controls.firstName.value,
        lastName: this.checkoutInfo.controls.lastName.value,
        email: this.checkoutInfo.controls.email.value,
      },
      creditCard: {
        creditCardNumber: this.checkoutInfo.controls.creditCardNumber.value,
        expirationDate: this.checkoutInfo.controls.expirationDate.value,
        ccv: this.checkoutInfo.controls.ccv.value,
      },
      customerAddress: {
        address: this.checkoutInfo.controls.address.value,
        city: this.checkoutInfo.controls.city.value,
        state: this.checkoutInfo.controls.state.value,
        zipCode: this.checkoutInfo.controls.zipCode.value,
        country: this.checkoutInfo.controls.country.value,
      },
      products: this.uniqueCourses,
    };
    this.customer = ob;
    console.log(this.customer);
    this.getLast4DigitsOfCreditCard();
  }

  getLast4DigitsOfCreditCard() {
    const digits: string = this.checkoutInfo.controls.creditCardNumber.value;
    this.ccDigits = digits.substr(digits.length - 4);
  }

  makePayment() {
    this.ts
      .createTransaction("TU", this.customer)
      .toPromise()
      .then((res) => {
        console.log(res);
        try {
          if (res.creditCardApproved === true) {
            this.dataTransfer.transactionObject = [];
            this.paymentSuccess = 1;
            // this.totalPrice = 0;
            this.coursesOnCart = [];
            console.log("Payment successful");
          }
          if (res.creditCardApproved === false) {
            console.log(res);
            this.dataTransfer.transactionObject = [];
            this.paymentSuccess = 2;
            this.totalPrice = 0;
            this.coursesOnCart = [];
            console.error("Payment unsuccessful");
          }
        } catch (err) {
          console.log("Something went wrong");
          this.dataTransfer.transactionObject = [];
          this.paymentSuccess = 2;
          this.totalPrice = 0;
          this.coursesOnCart = [];
        }
      });
  }

  emptyArray() {
    this.dataTransfer.transactionObject = [];
    this.coursesArray = [];
    this.coursesOnCart = [];
  }

  getPriceTotal() {
    this.coursesOnCart.forEach((c) => {
      this.totalPrice += c.price;
    });
  }
}
