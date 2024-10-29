import React, {Component, useEffect, useState} from 'react';
// import {render} from "@testing-library/react";


const SKILL_SET = ['HTML/CSS', 'JavaScript', 'MySQL', 'SQL', 'PHP', 'Windows',
        'jQuery', 'Linux', 'WordPress', 'Node.js', 'Python', 'SQLite',
        'Java', 'Microsoft SQL Server', 'Bash/Shell/PowerShell', 'Android',
        'PostgreSQL', 'MacOS', 'AWS', 'React.js', '.NET', 'C#',
        'Google Cloud Platform', 'MongoDB', 'MariaDB', 'Docker',
        'TypeScript', 'C', 'C++', 'iOS', 'Angular', 'Firebase', 'Express',
        '.NET Core', 'ASP.NET', 'Raspberry Pi', 'Microsoft Azure',
        'Vue.js', 'Laravel', 'Angular.js', 'Oracle', 'ASP.NET Core',
        'Django', 'React Native', 'Heroku', 'Arduino', 'VBA', 'Redis',
        'Slack Apps and Integrations', 'Flask', 'TensorFlow', 'Pandas',
        'Ruby', 'Unity 3D', 'Go', 'Flutter', 'Kubernetes', 'R', 'Swift',
        'Spring', 'Elasticsearch', 'Drupal', 'Cordova', 'Assembly',
        'Objective-C', 'Ruby on Rails', 'Symfony', 'Gatsby', 'Dart',
        'Kotlin', 'Xamarin', 'Perl', 'DynamoDB', 'IBM Cloud or Watson',
        'Ansible', 'Unreal Engine', 'Apache Spark', 'Couchbase', 'Rust',
        'Keras', 'Torch/PyTorch', 'Cassandra', 'IBM DB2', 'Teraform',
        'Scala', 'Hadoop', 'Chef', 'Puppet', 'Haskell', 'Julia'
    ];

const Skills = (props) => {

        return (
        <div className='container mt-5'>
            <div className='d-flex flex-wrap justify-content-center'>
                {SKILL_SET.map((skill, index) => (
                    <div key={index} className="form-check m-2 skill_set">
                        <input
                            className="form-check-input skill_checkbox"
                            type="checkbox"
                            id={`checkbox-${index}`}
                            value={skill}
                        />
                        <label className="form-check-label" htmlFor={`checkbox-${index}`}>
                            {skill}
                        </label>
                    </div>
                ))}
            </div>
        </div>
        );
}

export default Skills;