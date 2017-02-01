import React from 'react'
import {reduxForm} from 'redux-form'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {CheckboxField, PhoneFieldWithoutCountryCode, TextField, SelectField, CountryCode, Country} from './../forms'

const validate = values => {
  const required = value => value ? null : 'Required'
  const errors = {}
  errors.skill = required(values.skill)
  errors.skill_description = required(values.skill_description)
  errors.vehicle_category = required(values.vehicle_category)
  return errors
}

const QuestionPage2 = reduxForm({
  form: 'question page2 form',
  fields: ['skill', 'skill_description', 'skill_level', 'vehicle_category', 'vehicle_car', 'vehicle_bus', 'vehicle_truck', 'vehicle_motorcycle', 'vehicle_van'],
  validate
})(React.createClass({
  componentDidMount(){
       $('.ui.rating')
  .rating({
    initialRating: 3,
    maxRating: 5
  })
;
},

  render () {
    const {
      fields: {skill, skill_description, skill_level, vehicle_category, vehicle_car, vehicle_bus, vehicle_truck, vehicle_motorcycle, vehicle_van},
      onSubmit,
      submitting,
      error
    } = this.props

    return (
        <form className={`ui form ${submitting ? 'loading' : ''}`} onSubmit={onSubmit}>
          <div className="ui top attached message">
            <h2>Questionare 2 :</h2>
          </div>
          <div className="ui middle attached segment">
            <h4>Skills & Licenses</h4>
            <div className="two fields">
              <div className="field">
                <label>Type of Skill</label>
                <input type="text" placeholder="Type of Skill" {...skill}/>
                {skill.touched && skill.error && <div className="ui pointing red basic label">{skill.error}</div>}
              </div>
              <div className="field">
                <label>Skill Description</label>
                <input type="text" placeholder="Skill Description" {...skill_description}/>
                {skill_description.touched && skill_description.error && <div className="ui pointing red basic label">{skill_description.error}</div>}
              </div>
              <div className="field">
                <label>Skill Level</label>
                <div className="ui rating" {...skill_level}></div>
                {skill_level.touched && skill_level.error && <div className="ui pointing red basic label">{skill_level.error}</div>}
              </div> 
            </div>
            <h4>Skills & Licenses</h4>
            <div className="two fields">
            <label>Select Vehicles</label>
              <div className="one field">
              <CheckboxField {...vehicle_car} label="Car"/>
            </div>
            <div className="one field">
              <CheckboxField {...vehicle_bus} label="Bus"/>
            </div>
            <div className="one field">
              <CheckboxField {...vehicle_truck} label="Truck"/>
            </div>
            <div className="one field">
              <CheckboxField {...vehicle_motorcycle} label="MotorCycle"/>
            </div>
            <div className="one field">
              <CheckboxField {...vehicle_van} label="Van"/>
            </div>
              <div className="field">
                <label>Vehicle Category</label>
                <input type="text"  placeholder="Vehicle Category" {...vehicle_category}/>
                {vehicle_category.touched && vehicle_category.error && <div className="ui pointing red basic label">{vehicle_category.error}</div>}
              </div> 
            </div>
            <div className="ui error message">
              <div className="header">Error !</div>
              <p>{error}</p>
            </div>
          </div>
          <div className="ui bottom attached segment">
            <button className="ui basic button " onClick={this.props.onBack} type="button">Back</button>
            <button className="ui primary right floated button" onClick={this.props.handleSubmit} type="submit">Next</button>
          </div>
        </form>
    )
  }
}))

export default connect(state => ({
}), dispatch => ({
  onSubmit: (values) => dispatch(push('/questionPage3')),
  onBack: () => dispatch(push('/questionare'))
}))(QuestionPage2)
