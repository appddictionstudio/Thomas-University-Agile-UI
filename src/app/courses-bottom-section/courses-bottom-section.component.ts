import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-bottom-section',
  templateUrl: './courses-bottom-section.component.html',
  styleUrls: ['./courses-bottom-section.component.scss']
})
export class CoursesBottomSectionComponent implements OnInit {
  bottomFilter: any[] = [];

  constructor() { }

  ngOnInit() {
    this.filterCourses();
  }

  courses = [
    {
      title: "Remote-ICAgile",
      subtitle: " Agile Testing",
      date: "September 10 - September 11, 2020",
      courseDate: "Sep 10 2020",
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
      id: 5,
      title: "Remote-SAFe",
      subtitle: "POPM 5.0",
      date: "September 19 - September 20, 2020",
      courseDate: "Sep 19 2020",
      img: "../../assets/img/logos/popm-5.png",
      learnText:
        "SAFe is improving business outcomes for companies across the world. Delivering maximum business value amid digital disruption and getting the business results needed is what SAFe Product Owners and Product Managers do through effective Program Increment execution.",
      learnText2:
        "Learn the skillsets needed to guide the delivery of value in a Lean enterprise and the activities, tools, and mechanics used to manage backlogs and programs.",
      price: 900,
      included: [
        { description: "Attendee Workbook" },
        { description: "Course certificate" },
        { description: "Catered breakfast and lunch" },
        {
          description:
            "Eligibility to take the SAFe® 4 Agile Test Automation exam",
        },
        { description: "One year membership to the SAFe Community Platform" },
      ],
    },
    {
      id: 6,
      title: "Remote-Agile",
      subtitle: "Fundamentals",
      date: "September 24 - September 25, 2020",
      courseDate: "Sep 24 2020",
      img: "../../assets/img/logos/ICP - Agile Fundamentals badge[4189].png",
      learnText:
        "The ICP-ATA is one of two knowledge-based certifications on the Agile Testing Track. The certification focuses primarily on test automation from an agile tester’s perspective as opposed to a programmer’s perspective. Students will learn how to set up an overall test automation strategy, including determining which types of tests are better suited for automated versus manual execution. The certification also highlights strategies for creating automated story and feature tests as well as system and integration tests. Because courses are technology-agnostic, participants will write automated tests using pseudo-code in the classroom.",
      learnText2:
        "This also helps maximize opportunities for students to learn from one another, regardless of their individual technical expertise. If you are ready to increase your knowledge about the world of test automation, this is the  right certification for you.",
      price: 900,
      link: "https://www.stmu.ca/event/agile-fundamentals-icp/",
      included: [
        { description: "Attendee Workbook" },
        { description: "Course certificate" },
        { description: "Catered breakfast and lunch" },
        {
          description:
            "Eligibility to take the SAFe® 4 Agile Test Automation exam",
        },
        { description: "One year membership to the SAFe Community Platform" },
      ],
    },
    {
      id: 7,
      title: "Remote-Leading",
      subtitle: "SAFe 5.0",
      date: "September 24 - September 25, 2020",
      courseDate: "Sep 24 2020",
      img: "../../assets/img/logos/leading safe badge.png",
      learnText:
        "During this two-day course, attendees will gain the knowledge necessary to lead a Lean- Agile enterprise by leveraging the Scaled Agile Framework® (SAFe®), and its underlying principles derived from Lean, systems thinking, Agile development, product development flow, and DevOps. They will discuss the five competencies needed to become a Lean Enterprise.They  will also learn and practice the skills for supporting and executing PI Planning events, and coordinating multiple Agile Release Trains(ARTs).",
      learnText2:
        "Attendees will gain an understanding of the Lean-Agile mindset, why it’s so  effective in today’s adapt-or-die marketplace, and what it means to lead a Lean-Agile transformation. They’ll also learn how to build and support Agile teams and programs, empower a Lean Portfolio, build a Continuous Delivery Pipeline and DevOps culture, and coordinate large solutions. They will develop a skillset that’s in demand worldwide—and empower their enterprises to succeed in a disruptive marketplace—when they become a SAFe® 4 Agilist (SA).",
      price: 900,
      included: [
        { description: "Attendee Workbook" },
        { description: "Course certificate" },
        { description: "Catered breakfast and lunch" },
        { description: "Eligibility to take the Leading SAFe® 4 (SA)" },
        { description: "One year membership to the SAFe Community Platform" },
      ],
    },
    {
      id: 8,
      title: "Remote-Scrum",
      subtitle: "Master 5.0",
      date: "October 8 - October 9, 2020",
      courseDate: "Oct 8 2020",
      img: "../../assets/img/logos/scrum-master-5.svg",
      learnText:
        "The ICP-TST is one of two knowledge-based certifications on the Agile Testing Track. This certification focuses primarily on agile testing techniques and processes in addition to the mindset and role of an agile tester. Learning outcomes include the ability to distinguish and “agilize” the different types of testing on an agile effort, and understanding how business, development, and testing personnel best collaborate on an agile development cadence.",
      learnText2:
        "In addition, course participants will learn agile test strategies and techniques related to release planning, testing within iterations, regression testing, performance testing, pre-deployment, and production support testing.",
      price: 900,
      included: [
        { description: "Attendee Workbook" },
        { description: "Course certificate" },
        { description: "Catered breakfast and lunch" },
        { description: "Eligibility to take the SAFe® 4 Agile Testing exam" },
        { description: "One year membership to the SAFe Community Platform" },
      ],
    },
    {
      id: 9,
      title: "Remote-Agile",
      subtitle: "Fundamentals",
      date: "October 15 - October 16, 2020",
      courseDate: "Oct 15 2020",
      img: "../../assets/img/logos/ICP - Agile Fundamentals badge[4189].png",
      learnText:
        "The ICP-ATA is one of two knowledge-based certifications on the Agile Testing Track. The certification focuses primarily on test automation from an agile tester’s perspective as opposed to a programmer’s perspective. Students will learn how to set up an overall test automation strategy, including determining which types of tests are better suited for automated versus manual execution. The certification also highlights strategies for creating automated story and feature tests as well as system and integration tests. Because courses are technology-agnostic, participants will write automated tests using pseudo-code in the classroom.",
      learnText2:
        "This also helps maximize opportunities for students to learn from one another, regardless of their individual technical expertise. If you are ready to increase your knowledge about the world of test automation, this is the  right certification for you.",
      price: 900,
      included: [
        { description: "Attendee Workbook" },
        { description: "Course certificate" },
        { description: "Catered breakfast and lunch" },
        {
          description:
            "Eligibility to take the SAFe® 4 Agile Test Automation exam",
        },
        { description: "One year membership to the SAFe Community Platform" },
      ],
    },
    {
      id: 10,
      title: "Remote-Leading",
      subtitle: "SAFe 5.0",
      date: "October 15 - October 16, 2020",
      courseDate: "Oct 15 2020",
      img: "../../assets/img/logos/leading safe badge.png",
      learnText:
        "During this two-day course, attendees will gain the knowledge necessary to lead a Lean- Agile enterprise by leveraging the Scaled Agile Framework® (SAFe®), and its underlying principles derived from Lean, systems thinking, Agile development, product development flow, and DevOps. They will discuss the five competencies needed to become a Lean Enterprise.They  will also learn and practice the skills for supporting and executing PI Planning events, and coordinating multiple Agile Release Trains(ARTs).",
      learnText2:
        "Attendees will gain an understanding of the Lean-Agile mindset, why it’s so  effective in today’s adapt-or-die marketplace, and what it means to lead a Lean-Agile transformation. They’ll also learn how to build and support Agile teams and programs, empower a Lean Portfolio, build a Continuous Delivery Pipeline and DevOps culture, and coordinate large solutions. They will develop a skillset that’s in demand worldwide—and empower their enterprises to succeed in a disruptive marketplace—when they become a SAFe® 4 Agilist (SA).",
      price: 900,
      included: [
        { description: "Attendee Workbook" },
        { description: "Course certificate" },
        { description: "Catered breakfast and lunch" },
        { description: "Eligibility to take the Leading SAFe® 4 (SA)" },
        { description: "One year membership to the SAFe Community Platform" },
      ],
    },
    {
      id: 11,
      title: "Remote-Agile",
      subtitle: "Fundamentals",
      date: "November 19 - November 20, 2020",
      courseDate: "Nov 19 2020",
      img: "../../assets/img/logos/ICP - Agile Fundamentals badge[4189].png",
      learnText:
        "The ICP-ATA is one of two knowledge-based certifications on the Agile Testing Track. The certification focuses primarily on test automation from an agile tester’s perspective as opposed to a programmer’s perspective. Students will learn how to set up an overall test automation strategy, including determining which types of tests are better suited for automated versus manual execution. The certification also highlights strategies for creating automated story and feature tests as well as system and integration tests. Because courses are technology-agnostic, participants will write automated tests using pseudo-code in the classroom.",
      learnText2:
        "This also helps maximize opportunities for students to learn from one another, regardless of their individual technical expertise. If you are ready to increase your knowledge about the world of test automation, this is the  right certification for you.",
      price: 900,
      included: [
        { description: "Attendee Workbook" },
        { description: "Course certificate" },
        { description: "Catered breakfast and lunch" },
        {
          description:
            "Eligibility to take the SAFe® 4 Agile Test Automation exam",
        },
        { description: "One year membership to the SAFe Community Platform" },
      ],
    },
    {
      id: 12,
      title: "Remote-Leading",
      subtitle: "SAFe 5.0",
      date: "November 19 - November 20, 2020",
      courseDate: "Nov 19 2020",
      img: "../../assets/img/logos/leading safe badge.png",
      learnText:
        "During this two-day course, attendees will gain the knowledge necessary to lead a Lean- Agile enterprise by leveraging the Scaled Agile Framework® (SAFe®), and its underlying principles derived from Lean, systems thinking, Agile development, product development flow, and DevOps. They will discuss the five competencies needed to become a Lean Enterprise.They  will also learn and practice the skills for supporting and executing PI Planning events, and coordinating multiple Agile Release Trains(ARTs).",
      learnText2:
        "Attendees will gain an understanding of the Lean-Agile mindset, why it’s so  effective in today’s adapt-or-die marketplace, and what it means to lead a Lean-Agile transformation. They’ll also learn how to build and support Agile teams and programs, empower a Lean Portfolio, build a Continuous Delivery Pipeline and DevOps culture, and coordinate large solutions. They will develop a skillset that’s in demand worldwide—and empower their enterprises to succeed in a disruptive marketplace—when they become a SAFe® 4 Agilist (SA).",
      price: 900,
      included: [
        { description: "Attendee Workbook" },
        { description: "Course certificate" },
        { description: "Catered breakfast and lunch" },
        { description: "Eligibility to take the Leading SAFe® 4 (SA)" },
        { description: "One year membership to the SAFe Community Platform" },
      ],
    },
    {
      id: 13,
      title: "Remote-Scrum",
      subtitle: "Master 5.0",
      date: "December 3 - December 4, 2020",
      courseDate: "Dec 3 2020",
      img: "../../assets/img/logos/scrum-master-5.svg",
      learnText:
        "The ICP-TST is one of two knowledge-based certifications on the Agile Testing Track. This certification focuses primarily on agile testing techniques and processes in addition to the mindset and role of an agile tester. Learning outcomes include the ability to distinguish and “agilize” the different types of testing on an agile effort, and understanding how business, development, and testing personnel best collaborate on an agile development cadence.",
      learnText2:
        "In addition, course participants will learn agile test strategies and techniques related to release planning, testing within iterations, regression testing, performance testing, pre-deployment, and production support testing.",
      price: 900,
      included: [
        { description: "Attendee Workbook" },
        { description: "Course certificate" },
        { description: "Catered breakfast and lunch" },
        { description: "Eligibility to take the SAFe® 4 Agile Testing exam" },
        { description: "One year membership to the SAFe Community Platform" },
      ],
    },
    {
      id: 14,
      title: "Remote-Agile",
      subtitle: "Fundamentals",
      date: "December 10 - December 11, 2020",
      courseDate: "Dec 10 2020",
      img: "../../assets/img/logos/ICP - Agile Fundamentals badge[4189].png",
      learnText:
        "The ICP-ATA is one of two knowledge-based certifications on the Agile Testing Track. The certification focuses primarily on test automation from an agile tester’s perspective as opposed to a programmer’s perspective. Students will learn how to set up an overall test automation strategy, including determining which types of tests are better suited for automated versus manual execution. The certification also highlights strategies for creating automated story and feature tests as well as system and integration tests. Because courses are technology-agnostic, participants will write automated tests using pseudo-code in the classroom.",
      learnText2:
        "This also helps maximize opportunities for students to learn from one another, regardless of their individual technical expertise. If you are ready to increase your knowledge about the world of test automation, this is the  right certification for you.",
      price: 900,
      included: [
        { description: "Attendee Workbook" },
        { description: "Course certificate" },
        { description: "Catered breakfast and lunch" },
        {
          description:
            "Eligibility to take the SAFe® 4 Agile Test Automation exam",
        },
        { description: "One year membership to the SAFe Community Platform" },
      ],
    },
    {
      id: 15,
      title: "Remote-Leading",
      subtitle: "SAFe 5.0",
      date: "December 10- December 11, 2020",
      courseDate: "Dec 10 2020",
      img: "../../assets/img/logos/leading safe badge.png",
      learnText:
        "During this two-day course, attendees will gain the knowledge necessary to lead a Lean- Agile enterprise by leveraging the Scaled Agile Framework® (SAFe®), and its underlying principles derived from Lean, systems thinking, Agile development, product development flow, and DevOps. They will discuss the five competencies needed to become a Lean Enterprise.They  will also learn and practice the skills for supporting and executing PI Planning events, and coordinating multiple Agile Release Trains(ARTs).",
      learnText2:
        "Attendees will gain an understanding of the Lean-Agile mindset, why it’s so  effective in today’s adapt-or-die marketplace, and what it means to lead a Lean-Agile transformation. They’ll also learn how to build and support Agile teams and programs, empower a Lean Portfolio, build a Continuous Delivery Pipeline and DevOps culture, and coordinate large solutions. They will develop a skillset that’s in demand worldwide—and empower their enterprises to succeed in a disruptive marketplace—when they become a SAFe® 4 Agilist (SA).",
      price: 900,
      included: [
        { description: "Attendee Workbook" },
        { description: "Course certificate" },
        { description: "Catered breakfast and lunch" },
        { description: "Eligibility to take the Leading SAFe® 4 (SA)" },
        { description: "One year membership to the SAFe Community Platform" },
      ],
    },
  ];

  filterCourses() {
    var numberOfDaysToAdd = 60;
    var currentDate = new Date(); //Today Date    
    var endDate = new Date();
    endDate.setDate(endDate.getDate() + numberOfDaysToAdd);
    var dateFiltered = this.courses.filter(
      c => new Date(c.courseDate) >= new Date(currentDate) && new Date(c.courseDate) <= new Date(endDate)
    )
    this.bottomFilter = dateFiltered.splice(0, 3);
    console.log(this.bottomFilter)
    return this.bottomFilter;
  }
  
}
