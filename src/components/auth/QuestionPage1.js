import React from 'react'
import {reduxForm} from 'redux-form'
import {CheckboxField, PhoneFieldWithoutCountryCode, TextField, SelectField, CountryCode, Country} from './../forms'

const year_obj = [
                  ['2006', '2006'],
                  ['2007', '2007'],
                  ['2008', '2008'],
                  ['2009', '2009'],
                  ['2010', '2010'],
                  ['2011', '2011'],
                  ['2012', '2012'],
                  ['2013', '2013'],
                  ['2014', '2014'],
                  ['2015', '2015'],
                  ['2016', '2016']
                ];
const validate = values => {
  const required = value => value ? null : 'Required'
  //const emailregex = email => (/^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|year|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(values.email || '')) ? null : 'Invalid email'
  const errors = {}
  errors.year = required(values.year)
  errors.duration = required(values.duration)
  // errors.email = emailregex(values.email || '')
  // if (!values.email) {
  //   errors.email = 'Required'
  // } else if (emailregex(values.email)) {
  //   errors.email = 'Invalid Email'
  // }
  errors.school_name = required(values.school_name)
  errors.certificate = required(values.certificate)
  errors.job_title = required(values.job_title)
  errors.job_location = required(values.job_location)
  errors.contract_type = required(values.contract_type)
  errors.major_task = required(values.major_task)
  errors.experience_year = required(values.experience_year)
  errors.experience_duration = required(values.experience_duration)
  errors.location = required(values.location)
  return errors
}

const QuestionPage1 = reduxForm({
  form: 'question page1 form',
  fields: ['year', 'duration', 'experience_year', 'job_location', 'contract_type', 'major_task', 'experience_duration', 'course_name', 'school_name', 'certificate', 'location', 'job_title'],
  validate
})(React.createClass({
  render () {
    const {
      fields: {year, duration, experience_duration, job_location, contract_type, major_task, experience_year, course_name, school_name, certificate, location, job_title},
      handleSubmit,
      submitting,
      onClosed,
      error
    } = this.props

    return (
        <form className={`ui form ${submitting ? 'loading' : ''}`} onSubmit={handleSubmit}>
          <div className="ui top attached message">
            <h2>Questionare 1 :</h2>
          </div>
          <div className="ui middle attached segment">
            <h4>Additional Courses/ Certificates</h4>
            <div className="two fields">
              <div className="field">
                  <SelectField {...year}
                label="Year"
                options={year_obj}
                />
                {year.touched && year.error && <div className="ui pointing red basic label">{year.error}</div>}
              </div>
              <div className="field">
                <label>Duration</label>
                <input type="text" placeholder="Duration" {...duration}/>
                {duration.touched && duration.error && <div className="ui pointing red basic label">{duration.error}</div>}
              </div>
              <div className="field">
                <label>Course Name</label>
                <input type="text" placeholder="Course Name" {...course_name}/>
                {course_name.touched && course_name.error && <div className="ui pointing red basic label">{course_name.error}</div>}
              </div>
              <div className="field">
                <label>School Name</label>
                <input type="text" placeholder="School Name" {...school_name}/>
                {school_name.touched && school_name.error && <div className="ui pointing red basic label">{school_name.error}</div>}
              </div>
              <div className="field">
                <label>Certificate</label>
                <input type="text" placeholder="Certificate" {...certificate}/>
                {certificate.touched && certificate.error && <div className="ui pointing red basic label">{certificate.error}</div>}
              </div>
              <div className="field">
                <label>Location</label>
                <input type="text" placeholder="Location" {...location}/>
                {location.touched && location.error && <div className="ui pointing red basic label">{location.error}</div>}
              </div>
            </div>
            <h4>Professional Experience</h4>
            <div className="two fields">
              <div className="field">
                  <SelectField {...experience_year}
                label="Year"
                options={year_obj}
                />
                {experience_year.touched && experience_year.error && <div className="ui pointing red basic label">{experience_year.error}</div>}
              </div>
              <div className="field">
                <label>Duration</label>
                <input type="text" placeholder="Duration" {...experience_duration}/>
                {experience_duration.touched && experience_duration.error && <div className="ui pointing red basic label">{experience_duration.error}</div>}
              </div>
              <div className="field">
                <label>Job Title</label>
                <input type="text" placeholder="Job Title" {...job_title}/>
                {job_title.touched && job_title.error && <div className="ui pointing red basic label">{job_title.error}</div>}
              </div>
              <div className="field">
                <label>Location</label>
                <input type="text" placeholder="Location" {...job_location}/>
                {job_location.touched && job_location.error && <div className="ui pointing red basic label">{job_location.error}</div>}
              </div>
              <div className="field">
                  <SelectField {...contract_type}
                label="Contract Type"
                options={[
                  ['CDD', 'CDD'],
                  ['STAGE', 'STAGE'],
                  ['CDI', 'CDI'],
                  ['ALTERNACE', 'ALTERNACE']
                ]}
                />
                {contract_type.touched && contract_type.error && <div className="ui pointing red basic label">{contract_type.error}</div>}
              </div>
              <div className="field">
                <label>Major Task</label>
                <input type="text" placeholder="Major Task" {...major_task}/>
                {major_task.touched && major_task.error && <div className="ui pointing red basic label">{major_task.error}</div>}
              </div>
            </div>
            <div className="ui error message">
              <div className="header">Error !</div>
              <p>{error}</p>
            </div>
          </div>
          <div className="ui bottom attached segment">
            <button className="ui basic button " onClick={onClosed} type="button">Back</button>
            <button className="ui primary right floated button" type="submit">Next</button>
          </div>
        </form>
    )
  }
}))

export default QuestionPage1
