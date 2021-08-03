import React from 'react';

function FormComponent(props) {
    return (
        <main>
            <form>

                <input
                    type='text'
                    placeholder='Firstname'
                    value={props.data.firstname}
                    name='firstname'
                    onChange={props.handleChange}
                /><br />

                <input
                    type='text'
                    placeholder='Lastname'
                    name='lastname'
                    value={props.data.lastname}
                    onChange={props.handleChange}
                /><br />

                <input type='number'
                    placeholder='Age'
                    name='age'
                    value={props.data.age}
                    onChange={props.handleChange}
                    
                /><br />

                <label><input type='radio' name='gender' value='Male' checked={props.data.gender === 'Male'} onChange={props.handleChange} />Male</label><br />
                <label><input type='radio' name='gender' value='Female' checked={props.data.gender === 'Female'} onChange={props.handleChange} />Female</label><br />

                <select name='destination' onChange={props.handleChange}>
                    <option value=''>--select destination--</option>
                    <option value='Germany'>Germany</option>
                    <option value='Nigeria'>Nigeria</option>
                    <option value='America'>America</option>
                    <option value='Kenya'>Kenya</option>
                </select>

                <br />
                <label>
                    <input
                        type='checkbox'
                        name='isVegan'
                        checked={props.data.isVegan}
                        onChange={props.handleChange}
                    />Vegan ?
                </label>

                <br />
                <label>
                    <input
                        type='checkbox'
                        name='isKosher'
                        checked={props.data.isKosher}
                        onChange={props.handleChange}
                    />Kosher ?
                </label>

                <br />
                <label>
                    <input
                        type='checkbox'
                        name='isLactoseFree'
                        checked={props.data.isLactoseFree}
                        onChange={props.handleChange}
                    />Lactose Free ?
                </label>

            </form>
            <hr />
            <h1>General Information:</h1>
            <h3>Your Name: {props.data.firstname} {props.data.lastname}</h3>
            <p>Age: {props.data.age}</p>
            <p>Destination: {props.data.destination}</p>
            <p>Gender: {props.data.gender}</p>
            <p>Dietary Restrictions: </p>
            <p>Vegan: {props.data.isVegan ? 'Yes' : 'No'}</p>
            <p>Kosher: {props.data.isKosher ? 'Yes' : 'No'}</p>
            <p>Lactose Free: {props.data.isLactoseFree ? 'Yes' : 'No'}</p>

        </main>
    );
}
export default FormComponent;

