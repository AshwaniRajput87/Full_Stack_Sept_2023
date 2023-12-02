import React from 'react';
import {render, fireEvent, screen } from '@testing-library/react';
import Counter from '../Counter';

describe('Counter Component', () => {

    test('snapshot testing', ()=>{
        const { asFragment } = render(<Counter />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders the intial count as 0 and button text', ()=>{
        render(<Counter />);

        const incrementBtnText = screen.getByText('+');
        const decrementBtnText = screen.getByText('-');
        const countText = screen.getByText('Count: 0');

        expect(incrementBtnText).toBeTruthy();
        expect(decrementBtnText).toBeTruthy();
        expect(countText).toBeTruthy();

    });

    test('increment btn increases the count value', ()=>{
        // here write the logic to test it
        render(<Counter />);

        const increBtn = screen.getByText('+');
        fireEvent.click(increBtn);

        const countText = screen.getByText('Count: 1');
        expect(countText).toBeTruthy();
    });


    test('decrement btn decreases the count value', ()=>{
        // here write the logic to test it -> HW
    });
});