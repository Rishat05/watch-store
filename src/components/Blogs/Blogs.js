import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div>
            <h1 className='question'>this is blogs</h1>
            <h1>Q1. What is context api? What is the purpose of context api?</h1>
            <p>React context allows us to pass down and use data in whatever component we need in our React app without using props.Context is designed to share data that can be considered 'global' for a tree of React components.The new React Context API, introduced with React v.16.3, allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels.React context helps us avoid the problem of props drilling.React context is great when we are passing data that can be used in any component in our application.</p>

            <br />
            <h1 className='question'>Q2. What is swmantic tag?</h1>
            <p>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language.A semantic element clearly describes its meaning to both the browser and the developer.Examples of non-semantic elements: div and span - Tells nothing about its content.Examples of semantic elements: form, table, and article - Clearly defines its content.</p>
            <br />
            <h1 className='question'>Q3. Difference between inline block and inline block element?</h1>
            <div className="differ">
                <div className="left">
                    <h1>Inline block</h1>
                    <p>An inline element does not start on a new line.</p>
                    <p>1. respect left and right margins and padding, but not top and bottom.</p>
                    <p>2. cannot have a width and height set.</p>
                    <p>3. allow other elements to sit to their left and right..</p>

                </div>
                <div className="right">
                    <h1>Inline block element</h1>

                    <p>1. allow other elements to sit to their left and right .</p>
                    <p>2. respect top and bottom margins and padding .</p>
                    <p>3. respect height and width .</p>

                </div>
            </div>
        </div>
    );
};

export default Blogs;