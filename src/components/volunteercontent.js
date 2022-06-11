import React from "react";
import "../css/main.css";
import "../css/volunteer-page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import head1 from "../images/illustrations/cropped-volunteer.png";
import Modal from "react-bootstrap/Modal";
import {
  modalShow,
  setModalShow,
  show,
  setShow,
  setModalState,
  modalState,
} from "react-bootstrap/Modal";
import { useState } from "react";

const VolunteerContent = () => {
  return (
    <>
      {/* Header */}
      <div className="container">
        <div className="illustration-header d-flex align-items-center mb-5">
          <div className="content">
            <h4>Come Join Us</h4>
            <br />
            <p>
              Looking to get involved? Want to build a portion of your resume?
              Maybe you want to be a part of an awesome group of people? Then
              consider volunteering with us!
            </p>
            <p>
              Harvard is Tech Seattle is a volunteer-based organization with
              people from around the world! We have opportunities for people
              with all backgrounds! Check out our open roles and connect with us
              if you want to join our diverse team!
            </p>
          </div>
          <img className="img-fluid" src={head1} alt="Volunteer Clipart" />
        </div>
      </div>
      <div>
        {/* Positions List */}
        <section className="positions-section">
          <div className="container">
            <h4 className="pt-5">Open Volunteer Opportunities</h4>
            <div className="row bgd">
              <div
                className="container d-flex flex-column justify-content-start align-items-start"
                style={{ padding: "2em" }}
              >
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#iOSAppDesigner"
                  >
                    iOS App Designer &amp; Developer
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#fullStackDeveloper"
                  >
                    Full-Stack Developer
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#wordPressExpert"
                    data-video="https://www.youtube.com/embed/4KEY-ocUA-I"
                  >
                    WordPress Expert
                  </button>
                </div>
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#webDeveloper"
                  >
                    Web Developer
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#softwareArchitect"
                  >
                    Software Architect
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#uIDesigner"
                  >
                    UI Designer
                  </button>
                </div>
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#technicalprogramManager"
                  >
                    Technical Program Manager
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#contentCreators"
                  >
                    Content Creators (Blog Writers - technical writers)
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#projectCoordinator"
                  >
                    Project Coordinator-CFA
                  </button>
                </div>
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#qAtester"
                  >
                    QA tester- Tech solution
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#dataScientist"
                  >
                    Data Scientist
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#solutionConsultant"
                  >
                    Solution Consultant
                  </button>
                </div>
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#projectManager"
                  >
                    Project Manager
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#programDirector"
                  >
                    Program Director: CFA
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#productsolutionArchitect"
                  >
                    Product Solution Architect-CFA
                  </button>
                </div>
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#socialMediaManager"
                  >
                    Social Media Manager
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#socialMediaContentCreators "
                  >
                    Social Media Content Creators
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#fundraisingCoordinator"
                  >
                    Fundraising Coordinator
                  </button>
                </div>
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#fundraiser"
                  >
                    Fundraiser
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#fundraisingManager "
                  >
                    Fundraising Manager
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#harvardOutreachManager"
                  >
                    Harvard Outreach Manager
                  </button>
                </div>
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#programManagerMarketing"
                  >
                    Program Manager- Marketing
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#marketingCampaignManager"
                  >
                    Marketing Campaign Manager
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#digitalContentCreator"
                  >
                    Digital Content Creator
                  </button>
                </div>
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#contentCreators"
                  >
                    Content Creators (Blog Writers - technical writers)
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#programManager"
                  >
                    Program Manager
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#webinarManager"
                  >
                    Webinar Manager
                  </button>
                </div>
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#eventHost"
                  >
                    Event Host
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#researchAnalyst"
                  >
                    Research Analyst
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#eventManager"
                  >
                    Event Manager
                  </button>
                </div>
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#volunteerCoordinator"
                  >
                    Volunteer Coordinator
                  </button>
                  <button
                    type="button"
                    className="w3-button w3-mobile"
                    data-toggle="modal"
                    data-target="#volunteerRecruiter"
                  >
                    Volunteer Recruiter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        {/* MODALS */}
        {/* iOS App Designer & Developer */}
        <div
          className="modal fade"
          id="iOSAppDesigner"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">
                  iOS App Designer &amp; Developer
                </h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>Help design and develop an iOS app for the org</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Full-Stack Developer */}
        <div
          className="modal fade"
          id="fullStackDeveloper"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Full-Stack Developer</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Can understand end to end flow of the website and system
                      in general.
                    </li>
                    <li>
                      Good hands experience on the back-end and front end.
                    </li>
                    <li>Can solve technical challenges of our team.</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* WordPress Expert */}
        <div
          className="modal fade"
          id="wordPressExpert"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">WordPress Expert</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>Practical experience with WordPress.</li>
                    <li>Can understand what templates to use.</li>
                    <li>
                      Give us detailed description of features and designs of
                      WordPress.
                    </li>
                    <li>Knows alternative options other than WordPress too.</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Web developer */}
        <div
          className="modal fade"
          id="webDeveloper"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Web Developer</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Should have worked on building websites for corporates or
                      as a freelancer.
                    </li>
                    <li>
                      Hand on expertise on developing websites from scratch.
                    </li>
                    <li>
                      Can help us follow best practices to follow when hosting a
                      website.
                    </li>
                    <li>
                      Can understand the security threats associated with
                      websites and how to mitigate them.
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Software Architect */}
        <div
          className="modal fade"
          id="softwareArchitect"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Software Architect</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Provide experienced leadership and technical direction.
                    </li>
                    <li>
                      Broad and extensive knowledge of the software development
                      process and its technologies.
                    </li>
                    <li>
                      Knowledge of architectural styles and design patterns,
                      makes high-level design choices and enforce technical
                      standards, including software coding standards, tools, and
                      platforms.
                    </li>
                    <li>
                      Accountable for platform features, from prioritization to
                      design to release.
                    </li>
                    <li>Own the full software development lifecycle.</li>
                    <li>
                      Understanding of various coding methods and computer
                      languages.
                    </li>
                    <li>Data modeling and database design experience.</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* UI Designer */}
        <div className="modal fade" id="uIDesigner" tabIndex={-1} role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">UI Designer</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>UI Designer</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Technical program Manager */}
        <div
          className="modal fade"
          id="technicalprogramManager"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Technical program Manager</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Create management, communication plans and processes.
                    </li>
                    <li>
                      Analyze and develop procedures for management and
                      technical duties.
                    </li>
                    <li>Define project responsibilities with stakeholders. </li>
                    <li>
                      Participate in how staff is allocated for the project.
                    </li>
                    <li>
                      Maintain project time frames, budget estimates and status
                      reports.
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content Creators (Blog Writers - technical writers) */}
        <div
          className="modal fade"
          id="contentCreators"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">
                  Content Creators (Blog Writers - technical writers)
                </h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Brainstorm and research new topics for future content to
                      support ongoing development of the content calendar/plan.
                    </li>
                    <li>
                      Organizes material and completes writing assignment
                      according to set standards regarding order, clarity,
                      conciseness, style, and terminology.
                    </li>
                    <li>
                      Coordinate with marketing and design volunteer to create
                      relevant content
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project coordinator-CFA */}
        <div
          className="modal fade"
          id="projectCoordinator"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Project Coordinator-CFA</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Monitor the progress of project bi-weekly and update the
                      same in the Gantt Chart for the team.
                    </li>
                    <li>
                      Providing detailed updates to Executive Director and
                      Program Manager.
                    </li>
                    <li>
                      Ensuring team members have the resources and database they
                      need to complete their assigned tasks on time.
                    </li>
                    <li>
                      Organizing reports and documents in the HiTs database.
                    </li>
                    <li>Planning &amp; Scheduling meetings for the team.</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* QA tester- Tech solution */}
        <div className="modal fade" id="qAtester" tabIndex={-1} role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">QA tester- Tech solution</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>Executes test cases under varying circumstances.</li>
                    <li>Documents and evaluates test results</li>
                    <li>
                      Detects, logs, and reports program bugs and glitches
                    </li>
                    <li>Tracks defects and helps troubleshoot errors</li>
                    <li>Reviews test procedures and develops test scripts</li>
                    <li>Partners with engineers to drive QA efforts</li>
                    <li>
                      Verify the content accessibility, user interaction,
                      control functions
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Data Scientist */}
        <div
          className="modal fade"
          id="dataScientist"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Data Scientist</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Collecting data through means such as analyzing business
                      results or by setting up and managing new studies
                    </li>
                    <li>
                      Transferring data into a new format to make it more
                      appropriate for analysis
                    </li>
                    <li>
                      Creating new, experimental frameworks to collect data
                    </li>
                    <li>Building tools to automate data collection</li>
                    <li>
                      Searching through large data sets for usable information
                    </li>
                    <li>
                      Creating reports and presentations for business uses
                    </li>
                    <li>Correlating similar data to find actionable results</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Solution Consultant */}
        <div
          className="modal fade"
          id="solutionConsultant"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Data Scientist</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Assist with creating solutions for any issues in the
                      program
                    </li>
                    <li>
                      Create a plan for expansion upon a specific
                      product/solution
                    </li>
                    <li>
                      Promote, integrate and explain the Tech solution to the
                      rest of the team working on the solution, bring clarity
                      upon technical aspects of the solution.
                    </li>
                    <li>
                      Solve problems through helpful recommendations and
                      practical suggestions
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Project Manager */}
        <div
          className="modal fade"
          id="projectManager"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Project Manager</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Creating long- and short-term plans, including setting
                      targets for milestones and adhering to deadlines
                    </li>
                    <li>Develop a project plan for each software release</li>
                    <li>
                      Serving as a point of contact for teams when multiple
                      units are assigned to the same project to ensure team
                      actions remain in synergy
                    </li>
                    <li>
                      Performing quality control on the project throughout
                      development to maintain the standards expected
                    </li>
                    <li>Maintain files and communications to stakeholders</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Program Director: CFA */}
        <div
          className="modal fade"
          id="programDirector"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Program Director: CFA</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>Experience developing and executing global program</li>
                    <li>
                      Initiate and set goals for programs based on the
                      organization’s strategic objectives.
                    </li>
                    <li>
                      Plan programs from start to finish, including defining
                      processes, framework and milestones.
                    </li>
                    <li>Must-have Passion for technology</li>
                    <li>
                      Prior experience working in the Technology Industry,
                      Social impact programs
                    </li>
                    <li>Hire, train and be a motivating mentor to staff</li>
                    <li>
                      Lead large group discussions to answer questions and
                      remedy complaints
                    </li>
                    <li>
                      Create and nurture effective communication within the
                      organization
                    </li>
                    <li>
                      Build a strong team through open communication and by
                      collaborating on decision-making responsibilities
                    </li>
                    <li>Develop and approve operations and budgets</li>
                    <li>
                      Must have Talent Development and Talent Recruitment
                      experience
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product Solution Architect-CFA */}
        <div
          className="modal fade"
          id="productsolutionArchitect"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">
                  Product Solution Architect-CFA
                </h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>Analyzing the technology environment.</li>
                    <li>Analyzing enterprise specifics.</li>
                    <li>Analyzing and documenting requirements.</li>
                    <li>Setting the collaboration framework.</li>
                    <li>Creating a solution prototype.</li>
                    <li>Participating in technology selection.</li>
                    <li>Controlling solution development.</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Social Media Manager */}
        <div
          className="modal fade"
          id="socialMediaManager"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Social Media Manager</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      The Social Media Officer will drive the development of
                      Harvard in the Seattle social media channels and support
                      the social communities.
                    </li>
                    <li>
                      Work with the Digital Marketing manager to develop and
                      implement PR strategies via social networking websites.
                    </li>
                    <li>
                      The Social Media Officer will be responsible for creating
                      professional and interesting content to keep the followers
                      engaged and to help increase awareness about the
                      organization.
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Social Media Content Creators  */}
        <div
          className="modal fade"
          id="socialMediaContentCreators"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">
                  {" "}
                  Social Media Content Creators{" "}
                </h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <p>
                    Social Media Content Creators are responsible for creating
                    engaging, professional videos and graphics for Harvard in
                    Seattle’s social media presences. This role reports to the
                    Digital Marketing Director and collaborates with the
                    Campaign Manager and Social Media Managers
                  </p>
                  <ul>
                    <li>Video editing experience</li>
                    <li>Adobe Premiere, Finalcut Pro skills preferred</li>
                    <li>Technical writing, Creative writing experience</li>
                    <li>
                      Creating content in line with Harvard in Tech Seattle’s
                      brand
                    </li>
                    <li>
                      Promote and increase audience interest in all products
                    </li>
                    <li>
                      Clearly communicate all important information to social
                      media audiences
                    </li>
                    <li>
                      All driving to more audience participation and interest in
                      products.
                      <ul>
                        <li>Timely video editing</li>
                        <li>
                          Able to keep up with video deadlines within product
                          campaigns
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fundraising Coordinator */}
        <div
          className="modal fade"
          id="fundraisingCoordinator"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Fundraising Coordinator</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Plan and direct special events for fundraising, such as
                      silent auctions, dances, golf events, or walks.
                    </li>
                    <li>Monitor progress of fundraising drives.</li>
                    <li>
                      Compile or develop materials to submit to granting or
                      other funding organizations.
                    </li>
                    <li>Develop and maintain media contact lists.</li>
                    <li>
                      Develop strategies to encourage new or increased
                      contributions.
                    </li>
                    <li>Write and send letters of thanks to donors</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fundraiser */}
        <div className="modal fade" id="fundraiser" tabIndex={-1} role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Fundraiser</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Raise funds for the program needs and regularly meet or
                      surpass fundraising targets
                    </li>
                    <li>
                      Research potential donors to gain insight into needs,
                      beliefs and donation habits to understand how to position
                      our organization to them
                    </li>
                    <li>
                      Assist in brainstorming and creating new methods to raise
                      funds for the organization
                    </li>
                    <li>
                      Leverage technology and social media where possible to
                      improve fundraising activities
                    </li>
                    <li>
                      Assist in planning and coordinating events meant to raise
                      funds and coordinate activities of volunteers and interns
                      related to event planning and execution
                    </li>
                    <li>
                      Collaborate with the Marketing team to create marketing
                      materials, like flyers and brochures, to be used for the
                      promotion of events and other fundraising pushes
                    </li>
                    <li>
                      Analyze the performance of events and other fundraising
                      activities for effectiveness and to identify areas where
                      money can be saved
                    </li>
                    <li>
                      Maintain complete and orderly records of donors and manage
                      regular donor communications
                    </li>
                    <li>
                      Build upon existing donor relationships and form new donor
                      relationships on a regular basis
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fundraising Manager */}
        <div
          className="modal fade"
          id="fundraisingManager"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Fundraising Manager</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Collaborate with other organizations and groups within the
                      community to build partnerships and enhance fundraising
                      activities
                    </li>
                    <li>Develop goals and a plan for raising money</li>
                    <li>
                      Refine that plan to adopt strategies and campaigns that
                      reflect the ideals of the company
                    </li>
                    <li>Identify and explore donor pools</li>
                    <li>Personally handle VIP donors</li>
                    <li>Plan and manage marketing</li>
                    <li>
                      Plan fundraising events such as dinners, receptions, and
                      parties
                    </li>
                    <li>Develop alliances with other organizations</li>
                    <li>Within Harvard Community and beyond</li>
                    <li>
                      Work collaboratively with teams to enhance fundraising
                      efforts
                    </li>
                    <li>
                      Keep in contact with team leads, keeping all up to date on
                      fundraising actions and successes
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Harvard Outreach Manager */}
        <div
          className="modal fade"
          id="harvardOutreachManager"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3"> Harvard Outreach Manager</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body px-3">
                <div className="modal-description px-5">
                  <p>
                    Harvard Outreach Manager will be responsible for connecting
                    with other Harvard organizations, opening channels of
                    communication and collaboration within the vast university
                    system. This position will be responsible for all Harvard
                    community-based education and outreach programs. This
                    position collaborates with the Fundraising Manager, and
                    reports to the Digital Marketing Manager. Harvard Alumni
                    status is required.
                  </p>
                  <ul>
                    <li>
                      Maintain Liaison with Harvard Alumni Association (HAA)
                    </li>
                    <li>
                      Developing professional relationships with other Harvard
                      organizations
                    </li>
                    <li>Provide education for all outreach activities</li>
                    <li>
                      Drive education-based programs to spread Harvard in Tech
                      Seattle’s name and brand. Supervise all activities of
                      organization, in coordination with team leads, to ensure
                      budgets and messaging align with organization's overall
                      budget and brands.
                    </li>
                    <li>
                      Assist Fundraising managers to maintain donor database
                    </li>
                    <li>Generate lists and reports when required</li>
                    <li>Assist with fundraising events</li>
                    <li>
                      Create and distribute Press Releases when applicable
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Program Manager- Marketing */}
        <div
          className="modal fade"
          id="programManagerMarketing"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Program Manager- Marketing</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body px-3">
                <div className="modal-description px-5">
                  <p>
                    The Marketing Program Manager will oversee the fulfillment
                    of larger Harvard in Tech Seattle Marketing goals. This role
                    reports to the Digital Marketing Director.
                  </p>
                  <ul>
                    <li>Marketing experience required</li>
                    <li>Brand building experience (encouraged)</li>
                    <li>
                      Disseminate and communicate brand to all Harvard in Tech
                      Seattle team members.
                    </li>
                    <li>Track audience involvement on all products</li>
                    <li>Create plans to fulfill larger marketing goals</li>
                    <li>Oversee social content creation</li>
                    <li>
                      Verify social content is in line with Harvard in Tech
                      Seattle’s brand
                    </li>
                    <li>
                      Provide insight for branding content of team products
                    </li>
                    <li>
                      Assist Digital Marketing Director on specifics of
                      marketing plan
                    </li>
                    <li>Assists in development of Marketing Plans</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*   Marketing Campaign Manager */}
        <div
          className="modal fade"
          id="marketingCampaignManager"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Marketing Campaign Manager</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body px-3">
                <div className="modal-description px-5">
                  <p>
                    The Campaign Manager will be responsible for tracking and
                    executing all marketing campaigns for Harvard in Tech
                    Seattle. This role reports to the Digital Marketing
                    Director. This role collaborates and assists all Content
                    Creators and the Program Manager.
                  </p>
                  <ul>
                    <li>Marketing Campaign experience</li>
                    <li>Content creation experience</li>
                    <li>Production experience (encouraged)</li>
                    <li>Developing Marketing campaigns</li>
                    <li>
                      Create behind the scenes documents when needed
                      <ul>
                        <li>Creative Brief</li>
                        <li>Shot lists</li>
                        <li>Shot lists</li>
                      </ul>
                    </li>
                    <li>Organize and assign tasks to content creators</li>
                    <li>
                      Organize and develop social media execution plan with
                      Social Media Managers
                    </li>
                    <li>Assist in content creation where needed</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Digital Content Creator */}
        <div
          className="modal fade"
          id="digitalContentCreator"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">Digital Content Creator</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Ability to think creatively and translate ideas into
                      digital content pieces (i.e Flyers, video clips,
                      presentations).
                    </li>
                    <li>Assist in creating monthly newsletter</li>
                    <li>
                      Excellent writing, editing, and communication skills
                    </li>
                    <li>
                      Develop and design presentations that advance key business
                      objectives and tell the story through clean, concise, and
                      well-organized slides.
                    </li>
                    <li>
                      Understand the latest PowerPoint trends and designs and
                      can add visuals, charts, and graphics to create
                      presentations that capture the audience’s attention
                    </li>
                    <li>
                      Support brand development and awareness using various
                      marketing mediums.
                      <ul>
                        <li>Develop campaigns</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content Creators (Blog Writers - technical writers) */}
        <div
          className="modal fade"
          id="contentCreators"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3">
                  Content Creators (Blog Writers - technical writers)
                </h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Brainstorm and research new topics for future content to
                      support ongoing development of the content calendar/plan.
                    </li>
                    <li>
                      Organizes material and completes writing assignment
                      according to set standards regarding order, clarity,
                      conciseness, style, and terminology.
                    </li>
                    <li>
                      Coordinate with marketing and design volunteer to create
                      relevant content
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Program Manager */}
        <div
          className="modal fade"
          id="programManager"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3"> Program Manager</h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>Plan &amp; execute a webinar</li>
                    <li>Identify and secure potential speaker</li>
                    <li>Must be passionate about technology</li>
                    <li>Zoom Expert</li>
                    <li>
                      Ability to summarize a discussion, take notes during a
                      webinar
                    </li>
                    <li>Manage webinar participants</li>
                    <li>Send out communication to webinar participants</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Webinar Manager */}
        <div
          className="modal fade"
          id="webinarManager"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3"> Webinar Manager </h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Update webinar guidelines and protocols for conducting
                      webinars
                    </li>
                    <li>
                      Develop benchmark criteria to measure webinar
                      effectiveness and implement improvements as necessary
                    </li>
                    <li>Develop and manage a calendar of webinars</li>
                    <li>
                      Work closely with the webinar team to ensure the
                      successful promotion of all webinars{" "}
                    </li>
                    <li>
                      Excellent communication, organizational, and writing
                      skills.
                    </li>
                    <li>
                      Coordinate scheduling and deliverables with webinar
                      presenters
                    </li>
                    <li>
                      Ability to manage multiple priorities and demanding
                      timeframes.
                    </li>
                    <li>
                      Knowledge and deep understanding of webinar technology.
                    </li>
                    <li>Proficient with Microsoft Office products.</li>
                    <li>
                      Ability to integrate webinars into broader engagement
                      campaigns.
                    </li>
                    <li>
                      Strong project management skills with the ability to solve
                      problems professionally and in a timely manner.
                    </li>
                    <li>Be self-directed and results-/goal-oriented.</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Event Host */}
        <div className="modal fade" id="eventHost" tabIndex={-1} role="dialog">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3"> Event Host </h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Excellent speaking, listening, organizational skills,
                      including multitasking, time management, and meticulous
                      attention to detail
                    </li>
                    <li>
                      Host a speaking event, panel discussion. Act as moderator
                      during the panel discussions, assisting with the planning,
                      preparation, and organization of events.
                    </li>
                    <li>
                      Coordinate among different teams and ensure they all work
                      together harmoniously for the event
                    </li>
                    <li>
                      Oversee Speaker experiences from conception through
                      post-event
                    </li>
                    <li>
                      Work with the Event Manager to ensure on-site
                      preparations, and event breakdown, consistent, high-level
                      service throughout the event
                    </li>
                    <li>Research and finalize panel discussion content</li>
                    <li>Proven success as an event host, public speaking</li>
                    <li>
                      Experience in maintaining and building enriching
                      relationships with the speakers and the participants
                    </li>
                    <li>Prior experience at Ted Talk preferable</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Research Analyst */}
        <div
          className="modal fade"
          id="researchAnalyst"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3"> Research Analyst </h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Perform qualitative and quantitative research and
                      consultation on relative markets
                    </li>
                    <li>
                      Keep up-to-date knowledge of the industry and related
                      markets being researched
                    </li>
                    <li>
                      Create clear and useful reports and recommendations for
                      organizational use
                    </li>
                    <li>Communicate with business leaders</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Event Manager */}
        <div
          className="modal fade"
          id="eventManager"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3"> Event Manager </h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Brainstorming and implementing event plans and concepts.
                    </li>
                    <li>Handling budgeting and invoicing.</li>
                    <li>Liaising and negotiating with vendors.</li>
                    <li>Negotiating sponsorship deals.</li>
                    <li>Handling logistics.</li>
                    <li>Updating senior management.</li>
                    <li>Managing branding and communication.</li>
                    <li>Developing event feedback surveys.</li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Volunteer Coordinator */}
        <div
          className="modal fade"
          id="volunteerCoordinator"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3"> Volunteer Coordinator </h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Coordinate the volunteer program to meet the hiring needs
                    </li>
                    <li>
                      Work with department heads, managers, and supervisors to
                      define the roles of volunteers.{" "}
                    </li>
                    <li>
                      Plan and carry out a volunteer recruitment program;
                      interview, screen, and place volunteers{" "}
                    </li>
                    <li>Onboard Volunteers</li>
                    <li>
                      Develop objectives, policies, procedures, and job
                      descriptions for all volunteer positions.
                    </li>
                    <li>Manage and maintain volunteer database </li>
                    <li>
                      Work with Marketing to increase exposure of volunteer
                      program to the public and assist with community outreach
                      and recruitment efforts.
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Volunteer Recruiter */}
        <div
          className="modal fade"
          id="volunteerRecruiter"
          tabIndex={-1}
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title pl-3"> Volunteer Recruiter </h5>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-description px-5">
                  <ul>
                    <li>
                      Seek out partners, institutions or channels (e.g. online
                      platforms, social media) that can provide volunteers with
                      the right skill sets
                    </li>
                    <li>
                      Vet prospective volunteers on behalf of the organization
                    </li>
                    <li>
                      Establish a volunteering agreement with potential partners
                      and volunteers
                    </li>
                    <li>Record keeping of volunteer information and skills</li>
                    <li>
                      Matching volunteers to opportunities that suit their
                      skills, keeping volunteers informed
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <a href="https://lnkd.in/g43ipkP">
                    <button className="modal-button">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerContent;
