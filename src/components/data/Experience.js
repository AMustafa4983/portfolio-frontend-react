import React, { useState, useEffect } from 'react';
import { Timeline } from 'flowbite-react';


function ProjectsCard() {
    const [Experience, setExperience] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/get-experience/')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setExperience(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
    <hr className='mt-8 mx-48'></hr>
    <h1 className='text-2xl text-white text-left pt-5 pl-2 pb-3'>Experience</h1>
    <Timeline className='mx-8'>
        {Experience.map((element) => (
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content className='items-left text-left pl-2'>
                    <Timeline.Time className='text-white'>
                        {element.date}
                    </Timeline.Time>
                    <Timeline.Title className='text-white text-left pl-2'>
                        {element.title}
                    </Timeline.Title>
                    <Timeline.Title className='text-white text-left pl-2'>
                        {element.job_title}
                    </Timeline.Title>
                    <Timeline.Body className='text-white text-left pl-2'>
                        {element.description}
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
        ))}
    </Timeline>
    </>
    );
}

export default ProjectsCard;


