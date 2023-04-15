import React, { useState } from "react";

// React DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { formatDate } from "utils/formatDate";

import "./styles.scss";

interface ICustomDatePickerProps {
    onChange: Function;
    labelText: string;
}

const CustomDatePicker = (props: ICustomDatePickerProps) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const handleOnChange = (date: Date | null) => {
        setSelectedDate(date);

        if (selectedDate) props.onChange({ target: { name: "createdDt", value: formatDate(selectedDate) } });
    };

    return (
        <div className="datepicker-container">
            <p>{props.labelText}:</p>
            <DatePicker selected={selectedDate} onChange={(date) => handleOnChange(date)} />
        </div>
    );
};

export default CustomDatePicker;
