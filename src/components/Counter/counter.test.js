import React from "react";
import {render, fireEvent} from "@testing-library/react";
import Counter from "./Counter";



test('it increments the counter', () => {
    const {getByText, getByRole} = render(<Counter/>);
    const countText = getByText('Count: 0');
    const incrementButton = getByRole('button', {name: 'Increment'});

    expect(countText).toHaveTextContent('Count: 0');

    fireEvent.click(incrementButton);

    expect(countText).toHaveTextContent("Count: 1");
})

