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
      title: "Remote-SAFe",
      subtitle: "POPM 5.0",
      date: "August 13 - Agust 14, 2020",
      img: "../../assets/img/logos/popm-5.png",
      learnText: "SAFe is improving business outcomes for companies across the world. Delivering maximum business value amid digital disruption and getting the business results needed is what SAFe Product Owners and Product Managers do through effective Program Increment execution.",
      learnText2: "Learn the skillsets needed to guide the delivery of value in a Lean enterprise and the activities, tools, and mechanics used to manage backlogs and programs.",
      price: 895,
      included: [
        {description: "Attendee Workbook"},
        {description: "Course certificate"},
        {description: "Catered breakfast and lunch"},
        {description: "Eligibility to take the SAFe® 4 Product Owner/Product Manager (POPM) exam"},
        {description: "One year membership to the SAFe Community Platform"},
      ]
    },
    {
      title: "Remote-Leading",
      subtitle: "SAFe 5.0",
      date: "August 20 - August 21, 2020",
      img: "../../assets/img/logos/leading safe badge.png",
      learnText: "During this two-day course, attendees will gain the knowledge necessary to lead a Lean- Agile enterprise by leveraging the Scaled Agile Framework® (SAFe®), and its underlying principles derived from Lean, systems thinking, Agile development, product development flow, and DevOps. They will discuss the five competencies needed to become a Lean Enterprise.They  will also learn and practice the skills for supporting and executing PI Planning events, and coordinating multiple Agile Release Trains(ARTs).",
      learnText2: "Attendees will gain an understanding of the Lean-Agile mindset, why it’s so  effective in today’s adapt-or-die marketplace, and what it means to lead a Lean-Agile transformation. They’ll also learn how to build and support Agile teams and programs, empower a Lean Portfolio, build a Continuous Delivery Pipeline and DevOps culture, and coordinate large solutions. They will develop a skillset that’s in demand worldwide—and empower their enterprises to succeed in a disruptive marketplace—when they become a SAFe® 4 Agilist (SA).",
      included: [
        {description: "Attendee Workbook"},
        {description: "Course certificate"},
        {description: "Catered breakfast and lunch"},
        {description: "Eligibility to take the Leading SAFe® 4 (SA)"},
        {description: "One year membership to the SAFe Community Platform"},
      ]
    },
    {
      title: "Remote-Agile",
      subtitle: "Fundamentals",
      date: "August 20 - August 21, 2020",
      img: "../../assets/img/logos/ICP - Agile Fundamentals badge[4189].png",
      learnText: "The ICP-ATA is one of two knowledge-based certifications on the Agile Testing Track. The certification focuses primarily on test automation from an agile tester’s perspective as opposed to a programmer’s perspective. Students will learn how to set up an overall test automation strategy, including determining which types of tests are better suited for automated versus manual execution. The certification also highlights strategies for creating automated story and feature tests as well as system and integration tests. Because courses are technology-agnostic, participants will write automated tests using pseudo-code in the classroom.",
      learnText2: "This also helps maximize opportunities for students to learn from one another, regardless of their individual technical expertise. If you are ready to increase your knowledge about the world of test automation, this is the  right certification for you.",
      included: [
        {description: "Attendee Workbook"},
        {description: "Course certificate"},
        {description: "Catered breakfast and lunch"},
        {description: "Eligibility to take the SAFe® 4 Agile Test Automation exam"},
        {description: "One year membership to the SAFe Community Platform"},
      ]
    },
  ]
  
}
