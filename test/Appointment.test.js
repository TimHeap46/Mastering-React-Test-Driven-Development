import React from 'react';
import ReactDOM from 'react-dom';
import {Appointment, AppointmentsDayView} from '../src/Appointment';

let container;
let customer;

beforeEach(() => {
    container = document.createElement('div');
});

describe('Appointment', () => {
    it('renders the customer first name', () => {
        customer = { firstName: 'Ashley'}
        ReactDOM.render(<Appointment customer={customer} />, container);
        expect(container.textContent).toMatch('Ashley');
    });

    it('renders another first name', () => {
       customer = {firstName: 'Jordan' };
       document.body.appendChild(container);

      ReactDOM.render(<Appointment customer={customer} />,container);
      expect(document.body.textContent).toMatch('Jordan');	
    });
});

describe('AppointmentsDayView', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
    });

    const render = component => 
        ReactDOM.render(component,container);

    it('renders a div with the right id', () => {
        render(<AppointmentsDayView appointments={[]} />);
        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
    })
});
