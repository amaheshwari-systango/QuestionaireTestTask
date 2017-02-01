import React from 'react'
import {reduxForm} from 'redux-form'
import {connect} from 'react-redux'

import {push} from 'react-router-redux'
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
  const duration_years_regex = duration_years => (^[0-9]+$.test(values.duration_years || '')) ? null : 'Invalid Value'
  const required = value => value ? null : 'Required'
  const errors = {}
  errors.duration_years = duration_years_regex(values.duration_years || '')
  if (!values.duration_years) {
    errors.duration_years = 'Required'
  } else if (duration_years_regex(values.duration_years)) {
    errors.duration_years = 'Invalid Value'
  }
  errors.hobby_description = required(values.hobby_description)
  errors.hobby_type = required(values.hobby_type)
  errors.country_overseas = required(values.country_overseas)
  errors.achievements = required(values.achievements)
  errors.activity_description = required(values.activity_description)
  errors.year_overseas = required(values.year_overseas)
  errors.weeks_overseas = required(values.weeks_overseas)
  errors.activity_type_overseas = required(values.activity_type_overseas)
  errors.activity_type = required(values.activity_type)
  errors.duration_years = required(values.duration_years)
  return errors
}

const QuestionPage3 = reduxForm({
  form: 'question page3 form',
  fields: ['hobby_description', 'hobby_type', 'country_overseas', 'achievements', 'activity_description', 'year_overseas', 'weeks_overseas', 'activity_type_overseas', 'activity_type', 'duration_years'],
  validate
})(React.createClass({

  render () {
    const {
      fields: {hobby_description, hobby_type, activity_type, achievements, activity_description, country_overseas, year_overseas, weeks_overseas, activity_type_overseas, duration_years},
      submitting,
      error
    } = this.props

    return (
        <form className={`ui form ${submitting ? 'loading' : ''}`} onSubmit={this.props.handleSubmit}>
          <div className="ui top attached message">
            <h2>Questionare 3 :</h2>
          </div>
          <div className="ui middle attached segment">
            <h4>Hobbies</h4>
            <div className="two fields">
              <div className="field">
                  <SelectField {...hobby_type}
                label="Hobby Type"
                options={[
                  ['Travel', 'Travel'],
                  ['Music', 'Music'],
                  ['Sport', 'Sport'],
                  ['Reading', 'Reading'],
                  ['Cinema', 'Cinema'],
                  ['NightLife', 'NightLife'],
                  ['Arts', 'Arts'],
                  ['Other', 'Other']
                ]}
                />
                {hobby_type.touched && hobby_type.error && <div className="ui pointing red basic label">{hobby_type.error}</div>}
              </div>
              <div className="field">
                <label>Hobby Description</label>
                <input type="text" placeholder="Hobby Description" {...hobby_description}/>
                {hobby_description.touched && hobby_description.error && <div className="ui pointing red basic label">{hobby_description.error}</div>}
              </div>
            </div>
            <h4>Trip & Experience Overseas</h4>
            <div className="two fields">
              <div className="field">
                <label>Country-City</label>
                <input type="text" placeholder="Country-City" {...country_overseas}/>
                {country_overseas.touched && country_overseas.error && <div className="ui pointing red basic label">{country_overseas.error}</div>}
              </div>
              <div className="field">
                  <SelectField {...year_overseas}
                label="Overseas Year"
                options={year_obj}
                />
                {year_overseas.touched && year_overseas.error && <div className="ui pointing red basic label">{year_overseas.error}</div>}
              </div>
              <div className="field">
                <label>Weeks Overseas</label>
                <input type="text" placeholder="Weeks Overseas" {...weeks_overseas}/>
                {weeks_overseas.touched && weeks_overseas.error && <div className="ui pointing red basic label">{weeks_overseas.error}</div>}
              </div>
              <div className="field">
                <label>Activity Type</label>
                <input type="text" placeholder="Activity Type" {...activity_type_overseas}/>
                {activity_type_overseas.touched && activity_type_overseas.error && <div className="ui pointing red basic label">{activity_type_overseas.error}</div>}
              </div>
            </div>
            <h4>Cultural, Sports, Social activities</h4>
            <div className="two fields">
              <div className="field">
                <label>Activty Type</label>
                <input type="text" placeholder="Activty Type" {...activity_type}/>
                {activity_type.touched && activity_type.error && <div className="ui pointing red basic label">{activity_type.error}</div>}
              </div>
              <div className="field">
                <label>Duration of Years</label>
                <input type="text" placeholder="Duration of Years" {...duration_years}/>
                {duration_years.touched && duration_years.error && <div className="ui pointing red basic label">{duration_years.error}</div>}
              </div>
              <div className="field">
                <label>Description of Activity</label>
                <input type="text" placeholder="Description of Activity" {...activity_description}/>
                {activity_description.touched && activity_description.error && <div className="ui pointing red basic label">{activity_description.error}</div>}
              </div>
              <div className="field">
                <label>Achievements/Responsibilities</label>
                <input type="text" placeholder="Achievements" {...achievements}/>
                {achievements.touched && achievements.error && <div className="ui pointing red basic label">{achievements.error}</div>}
              </div>
            </div>
            <div className="ui error message">
              <div className="header">Error !</div>
              <p>{error}</p>
            </div>
          </div>
          <div className="ui bottom attached segment">
            <button className="ui basic button " onClick={this.props.onBack} type="button">Back</button>
            <button className="ui primary right floated button" type="submit">Next</button>
          </div>
        </form>
    )
  }
}))

export default connect(state => ({
}), dispatch => ({
  handleSubmit: (values) => dispatch(push('/questionPage3')),
  onBack: () => dispatch(push('/questionPage2'))
}))(QuestionPage3)
