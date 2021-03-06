import React, {useContext, useEffect, useState} from 'react'
import Skills from '../components/Skills'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {createProject, createProjectWithoutFile, fetchCategories, fetchProjects} from "../http/ProjectsAPI";

const Adding_project = observer(() => {
    const {project} = useContext(Context)

    // useEffect(() => {
    //     fetchCategories().then(data => project.setCategories(data))
    // }, [])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [payment, setPayment] = useState(0)
    const [file, setFile] = useState(null)
    const [status, setStatus] = useState('')

    const selectFile = e => {
        console.log(e.target.files)
        setFile(e.target.files[0])
    }

    const click = () => {
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('description', description)
            formData.append('payment', `${payment}`)
            if (file === null) {
                alert(createProjectWithoutFile(formData))
            } else {
                formData.append('file', file)
                alert(createProject(formData))
            }
        }catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div id="Add-project">
            <form>
                <div className="input-item">
                    <label htmlFor="project_name">Name of the project</label>
                    <input id="project_name" type="text" placeholder="Name of the project"  value={name}
                           onChange={e => setName(e.target.value)}/>
                </div>
                <div className="input-item">
                    <label htmlFor="project_desc">Description</label>
                    <textarea name="desc" id="project_desc" placeholder="Description" value={description}
                              onChange={e => setDescription(e.target.value)}/>
                </div>
                <div className="input-item">
                    <label htmlFor="project_task">Task file</label>
                    <input id="project_task" type="file" className="input-upload" onChange={selectFile}/>
                </div>
                <div className="input-item">
                    <label htmlFor="project_category">Category</label>
                    <select id="project_category" name="cars">
                        <option value="volvo">---</option>
                        {project.categories.map((category) =>
                            <option key={category.id} onClick={() => project.setSelectedCategory(category)}
                                    value="volvo">
                                {category.name}
                            </option>
                        )}
                    </select>
                </div>
                <div className="input-item">
                    <label htmlFor="project_skills">Skills</label>
                    <div className="project-skills">
                        <Skills />
                    </div>
                </div>
                <div className="input-item">
                    <label htmlFor="price">Price</label>
                    <input id="price" placeholder="Price" value={payment}
                           onChange={e => setPayment(Number(e.target.value))}/>
                </div>
                <div className="submit">
                    <button className="submit-btn" onClick={click}>Submit</button>
                </div>
            </form>
        </div>
    )
});

export default Adding_project
