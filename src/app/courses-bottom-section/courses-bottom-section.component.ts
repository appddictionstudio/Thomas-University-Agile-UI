import { Component, OnInit } from "@angular/core";
import { TransferDataService } from "../services/transfer-data.service";

@Component({
  selector: "app-courses-bottom-section",
  templateUrl: "./courses-bottom-section.component.html",
  styleUrls: ["./courses-bottom-section.component.scss"],
})
export class CoursesBottomSectionComponent implements OnInit {
  selectedCourses: any[] = [];
  bottomFilter: any[] = [];

  constructor(public dataTransfer: TransferDataService) {}

  ngOnInit() {
    this.filterCourses();
    this.emptyArray();
  }

  agileTesting = {
    title: "Remote-ICAgile",
    subtitle: " Agile Testing",
    img: "../../assets/img/logos/agile-test.png",
    learnText: `In this two-day course, attendees will gain an understanding of 
    agile testing techniques and processes, as well as the mindset and role of 
    an agile tester. They will learn to distinguish and “agilize” the different 
    types of testing on an agile effort. In addition, they will develop an
     understanding of how business, development, and testing personnel collaborate 
     best through an agile development cadence. `,
    learnText2: ``,
    price: 900,
    included: [
      { description: "Printed workbook (digital workbook for remote classes)" },
      { description: "ICP-TST Certification" },
      { description: "Course certificate of completion" },
    ],
  };

  leadingSafe = {
    title: "Remote-Leading",
    subtitle: " SAFe 5.0",
    img: "../../assets/img/logos/leading safe badge.png",
    learnText: `During this two-day course, attendees will 
    gain the knowledge necessary to lead a Lean-Agile enterprise 
    by leveraging the Scaled Agile Framework® (SAFe®), and its 
    underlying principles derived from Lean, systems thinking, 
    Agile development, product development flow, and DevOps. 
    They will discuss the five competencies needed to become a Lean Enterprise. 
    They will also learn and practice the skills for supporting 
    and executing PI Planning events, and coordinating multiple 
    Agile Release Trains (ARTs).`,
    learnText2: `Attendees will gain an understanding of the Lean-Agile 
    mindset, why it’s so effective in today’s adapt-or-die marketplace, 
    and what it means to lead a Lean-Agile transformation. They’ll also 
    learn how to build and support Agile teams and programs, empower a Lean 
    Portfolio, build a Continuous Delivery Pipeline and DevOps culture, and 
    coordinate large solutions. They will develop a skillset that’s in demand 
    worldwide—and empower their enterprises to succeed in a disruptive 
    marketplace—when they become a SAFe® 5 Agilist (SA).

    Attending the class prepares individuals to take the exam and become a 
    certified SAFe® Agilist (SA)`,
    price: 900,
    included: [
      {
        description: "Attendee workbook (digital workbook for remote classes)",
      },
      {
        description:
          "Preparation and eligibility to take the SAFe® 5 Agilist exam",
      },
      { description: "One year membership to the SAFe Community Platform" },
      { description: "Course certificate of completion" },
    ],
  };

  safePopm = {
    title: "Remote-SAFe",
    subtitle: "POPM 5.0",
    img: "../../assets/img/logos/popm-5.png",
    learnText: `During this two-day course, attendees will gain an 
    in-depth understanding of the Agile Release Train (ART), how it 
    delivers value, and what they can do to effectively perform their role.
    They will develop the skillsets needed to guide the delivery of 
    value in a Lean enterprise—and learn about the activities, tools, 
    and mechanics used to manage backlogs and programs—by becoming a SAFe® 5 
    Product Owner/Product Manager (POPM).`,
    learnText2: `They will also learn how to apply Lean thinking to write Epics, 
    break them down into Features and Stories, plan and execute Iterations, and 
    plan Program Increments. Finally, attendees learn about the Continuous Delivery 
    Pipeline and DevOps culture, how to effectively integrate as Product Owners and 
    Product Managers, and what it takes to relentlessly improve the ART`,
    price: 900,
    included: [
      {
        description: "Attendee workbook (digital workbook for remote classes)",
      },
      {
        description:
          "Preparation and eligibility to take the SAFe® 5 Product Owner/Product Manager (POPM) exam",
      },
      { description: "One year membership to the SAFe Community Platform" },
      { description: "Course certificate of completion" },
    ],
  };

  scrumMaster = {
    title: "Remote-Scrum",
    subtitle: "Master 5.0",
    img: "../../assets/img/logos/scrum-master-5.svg",
    learnText: `In this two-day course, attendees will gain an understanding 
    of the role of a Scrum Master in a SAFe enterprise. Unlike traditional Scrum 
    Master training that focuses on the fundamentals of team-level Scrum, 
    the SAFe Scrum Master course explores the role of the Scrum Master in 
    the context of the entire enterprise, and prepares attendees to successfully 
    plan and execute the Program Increment (PI), the primary enabler of alignment 
    throughout all levels of a SAFe organization. This includes learning the key components of 
    Agile at scale development, how Scrum is facilitated throughout the enterprise, and how to 
    execute Iteration Planning.`,
    learnText2: `Attendees will also discover how to build high performing Agile teams by becoming 
    a servant leader and coach, and how to coach those teams to deliver the maximum business value 
    at scale. SAFe 5 Scrum Master (SSM) certification signifies that people are prepared to perform 
    the role of Scrum Master in a SAFe environment, increasing their value to teams and organizations 
    that are implementing SAFe.`,
    price: 900,
    included: [
      { description: "Printed workbook (digital workbook for remote classes)" },
      {
        description:
          "Preparation and eligibility to take the SAFe® 5 Scrum Master (SSM) exam",
      },
      { description: "One-year membership to the SAFe Community Platform" },
      { description: "Course certificate of completion" },
    ],
  };

  agileFundamentals = {
    title: "Remote-Agile",
    subtitle: "Fundamentals",
    img: "../../assets/img/logos/ICP - Agile Fundamentals badge[4189].png",
    learnText: `In this two-day course attendees will gain understanding of 
    the history of the agile movement, the distinctions among Agile values, 
    principles, and practices, key aspects of value-driven development, 
    adaptive planning techniques, and how to cultivate collaboration with 
    customers, within organizations and within teams. Attendees will also 
    gain the vocabulary needed to discuss the benefits of agile approaches 
    and how to avoid common pitfalls with fellow agile practitioners. In 
    addition, the course focuses on helping attendees understand the value 
    of continuous feedback, learning, and adaptation for products, processes, 
    teams, and organizations.`,
    learnText2: ``,
    price: 900,
    included: [
      { description: "Printed workbook (digital workbook for remote classes)" },
      { description: "ICP Certification" },
      { description: "Course certificate of completion" },
    ],
  };

  certifiedScrumMaster = {
    title: "Remote-Certified",
    subtitle: " Scrum Master",
    img: "../../assets/img/logos/SAI_BadgeSizes_DigitalBadging_CSM.png",
    learnText: `Scrum is a simple yet incredibly powerful set of practices that help teams
     deliver products in short cycles, enable fast feedback, and create a culture of rapid 
     adaptation to change.
    Companies today cannot afford to ideate, research, and develop a new product over a long 
    period. The risk is that by the time the product is ready for launch, someone nimbler, 
    faster, more agile, who is able to identify an opportunity and quickly bring a solution 
    to life, has already taken the top spot in the market. This class teaches the foundations 
    of Agile and provides a solid understanding of the Scrum framework.`,
    learnText2: `Learn the essential concepts and tools of Scrum, including managing product backlogs, 
    planning releases and sprints, tracking and reporting progress, and conducting stand-ups and retrospectives.

    Taught by a certified Scrum Trainer, this class takes participants through a series of 
    interactive exercises where they can learn and apply first-hand the principles of Scrum.
    
    At the end of the class, the participants are able to implement Scrum in their work 
    environment, adopt a more innovative mindset, and drive an Agile culture change in their organization.`,
    price: 900,
    included: [
      {
        description: "Attendee workbook (digital workbook for remote classes)",
      },
      {
        description:
          "Preparation and eligibility to take the Scrum Master Certification exam (exam fee included with registration)",
      },
      { description: "Two year membership to Scrum Alliance" },
      { description: "14 PDUs from PMI (Project Management Institute)" },
    ],
  };

  safeArchitects = {
    // id: 7,
    title: "Remote-Certified",
    subtitle: " SAFe Architect",
    img: "../../assets/img/logos/cert_mark_ARCH_badge_large_300px.png",
    learnText: `Attendees can improve collaboration and alignment in a SAFe® 
    Lean-Agile enterprise when they become a SAFe 5 Architect. The SAFe® for 
    Architects course prepares System, Solution, and Enterprise Architects to engage 
    across the organization as effective leaders and change agents who collaboratively 
    deliver architectural solutions.
    During this three-day course, attendees will explore the roles, responsibilities, 
    and mindset of Agile Architects, and appreciate how to align architecture with 
    business value and drive continuous flow to large systems-of-systems while 
    supporting SAFe program execution.`,
    learnText2: `This course is for senior technical contributors who need to understand the role of System, 
    Solution, and Enterprise Architects in Lean-Agile enterprises. The course is also appropriate for 
    individuals desiring a deeper view into how architecture enables continuous value flow and how 
    architects engage in, and contribute to, a Lean-Agile enterprise.`,
    price: 2000,
    included: [
      {
        description: "Attendee workbook (digital workbook for remote classes)",
      },
      {
        description:
          "Eligibility to take the SAFe® 5 Architect (ARCH) exam",
      },
      { description: " One-year membership to the SAFe Community Platform" },
      { description: "Course certificate of completion" },
    ],
  };

  courses = [
    {
      courseInfo: this.agileFundamentals,
      date: "October 15 - October 16, 2020",
      courseDate: "Oct 15 2020",
    },
    {
      courseInfo: this.leadingSafe,
      date: "October 15 - October 16, 2020",
      courseDate: "Oct 15 2020",
    },
    {
      courseInfo: this.certifiedScrumMaster,
      date: "October 29 - October 30, 2020",
      courseDate: "Oct 29 2020",
    },
    {
      courseInfo: this.agileTesting,
      date: "November 5 - November 6, 2020",
      courseDate: "Nov 5 2020",
    },
    {
      courseInfo: this.agileFundamentals,
      date: "November 19 - November 20, 2020",
      courseDate: "Nov 19 2020",
    },
    {
      courseInfo: this.leadingSafe,
      date: "November 19 - November 20, 2020",
      courseDate: "Nov 19 2020",
    },
    {
      courseInfo: this.certifiedScrumMaster,
      date: "November 23 - November 24, 2020",
      courseDate: "Nov 23 2020",
    },
    {
      courseInfo: this.scrumMaster,
      date: "December 3 - December 4, 2020",
      courseDate: "Dec 3 2020",
    },
    {
      courseInfo: this.safeArchitects,
      date: "December 14 - December 16, 2020",
      courseDate: "Dec 14 2020",
    },
   
  ];

  filterCourses() {
    var numberOfDaysToAdd = 60;
    var currentDate = new Date(); //Today Date
    var endDate = new Date();
    endDate.setDate(endDate.getDate() + numberOfDaysToAdd);
    var dateFiltered = this.courses.filter(
      (c) =>
        new Date(c.courseDate) >= new Date(currentDate) &&
        new Date(c.courseDate) <= new Date(endDate)
    );
    this.bottomFilter = dateFiltered.splice(0, 3);
    console.log(this.bottomFilter);
    return this.bottomFilter;
  }

  addToCart(val) {
    this.selectedCourses.push(val);
    this.dataTransfer.transactionObject.push(val);
  }
  emptyArray() {
    this.dataTransfer.transactionObject = [];
  }
}
