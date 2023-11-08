import { Timeline } from 'flowbite-react';
import { education } from './data';

function Education() {

    return (
        <>
            <hr className='mt-8 mx-48'></hr>
            <h1 className='text-2xl text-white text-left pt-5 pl-2 pb-3'>Education</h1>
            <Timeline className='mx-8'>
                <Timeline.Item>
                    <Timeline.Point />

                    {education.map((element) => (
                        <Timeline.Content className='items-left text-left pl-2'>

                            <Timeline.Time className='text-white'>
                                {element.date}
                            </Timeline.Time>
                            <Timeline.Title className='text-white text-left pl-2'>
                                {element.title}
                            </Timeline.Title>
                            <Timeline.Title className='text-white text-left pl-2'>
                                Major: {element.major}
                            </Timeline.Title>
                            <Timeline.Title className='text-white text-left pl-2'>
                                GPA: {element.description}
                            </Timeline.Title>
                        </Timeline.Content>

                    ))}


                </Timeline.Item>
            </Timeline>
        </>
    );
}

export default Education;


