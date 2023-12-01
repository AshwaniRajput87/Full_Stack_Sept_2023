import React from 'react';
import {render, fireEvent, screen } from '@testing-library/react';
import Counter from '../Counter';


describe('Counter Component', () => {

    test('Counter component intila rendering with count 0', ()=> {
        render(<Counter />);
        
        const incrementBtnText = screen.getByText('+');
        const decrementBtnText = screen.getByText('-');
        const countText = screen.getByText('0');

        expect(incrementBtnText).toBeTruthy();
        expect(decrementBtnText).toBeTruthy();
        expect(countText).toBeTruthy();
    });

});