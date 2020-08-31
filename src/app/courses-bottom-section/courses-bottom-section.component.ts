import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-bottom-section',
  templateUrl: './courses-bottom-section.component.html',
  styleUrls: ['./courses-bottom-section.component.scss']
})
export class CoursesBottomSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  courses = [
    {
      title: "Remote-ICAgile",
      subtitle: " Agile Testing",
      date: "September 10 - September 11, 2020",
      img: "../../assets/img/logos/agile-test.png",
      learnText: "SAFe is improving business outcomes for companies across the world. Delivering maximum business value amid digital disruption and getting the business results needed is what SAFe Product Owners and Product Managers do through effective Program Increment execution.",
      learnText2: "Learn the skillsets needed to guide the delivery of value in a Lean enterprise and the activities, tools, and mechanics used to manage backlogs and programs.",
      price: 900,
      included: [
        { description: "Attendee Workbook" },
        { description: "Course certificate" },
        { description: "Catered breakfast and lunch" },
        { description: "Eligibility to take the SAFe® 4 Agile Test Automation exam" },
        { description: "One year membership to the SAFe Community Platform" },
      ]
    },
    {
      title: "Remote-SAFe",
      subtitle: "POPM 5.0",
      date: "September 19 - September 20, 2020",
      img: "../../assets/img/logos/popm-5.png",
      learnText: "SAFe is improving business outcomes for companies across the world. Delivering maximum business value amid digital disruption and getting the business results needed is what SAFe Product Owners and Product Managers do through effective Program Increment execution.",
      learnText2: "Learn the skillsets needed to guide the delivery of value in a Lean enterprise and the activities, tools, and mechanics used to manage backlogs and programs.",
      price: 900,
      included: [
        { description: "Attendee Workbook" },
        { description: "Course certificate" },
        { description: "Catered breakfast and lunch" },
        { description: "Eligibility to take the SAFe® 4 Agile Test Automation exam" },
        { description: "One year membership to the SAFe Community Platform" },
      ]
    },
    {
      title: "Remote-Agile",
      subtitle: "Fundamentals",
      date: "September 24 - September 25, 2020",
      img: "../../assets/img/logos/ICP - Agile Fundamentals badge[4189].png",
      learnText: "The ICP-ATA is one of two knowledge-based certifications on the Agile Testing Track. The certification focuses primarily on test automation from an agile tester’s perspective as opposed to a programmer’s perspective. Students will learn how to set up an overall test automation strategy, including determining which types of tests are better suited for automated versus manual execution. The certification also highlights strategies for creating automated story and feature tests as well as system and integration tests. Because courses are technology-agnostic, participants will write automated tests using pseudo-code in the classroom.",
      learnText2: "This also helps maximize opportunities for students to learn from one another, regardless of their individual technical expertise. If you are ready to increase your knowledge about the world of test automation, this is the  right certification for you.",
      price: 900,
      included: [
        { description: "Attendee Workbook" },
        { description: "Course certificate" },
        { description: "Catered breakfast and lunch" },
        { description: "Eligibility to take the SAFe® 4 Agile Test Automation exam" },
        { description: "One year membership to the SAFe Community Platform" },
      ]
    },
  ]
  
}
