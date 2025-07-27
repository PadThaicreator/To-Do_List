'use client'

import { useState } from "react"

export default function AddTaskPage(){
    const [category , setCategory] = useState("")
    const [other , setOther] = useState("")

    return(
        <div className="p-4 flex flex-1 flex-col">
            <div className="p-4 text-xl">
                Add Task
            </div>
            <div className="grid grid-cols-3 gap-2 p-4">
                <div className="form-task flex-1">
                    <label htmlFor="title">Title</label>
                    <input type="text"  id="title" className="input-block"/>
                </div>
                <div className="form-task">
                    <label htmlFor="dateWork">Date of Task</label>
                    <input type="datetime-local" id="dateWork" className="input-block"/>
                </div>
                <div className="form-task">
                    <label htmlFor="category">Category of Task</label>
                    <select  id="category" onChange={(e)=>{setCategory(e.target.value)}} className="input-block ">
                        <option value="">Select Category for Task</option>
                        <option value="homework">Homework</option>
                        <option value="travel">Travel</option>
                        <option value="flight">Flight</option>
                        <option value="meeting">Meeting</option>
                        <option value="other">Other</option>
                    </select>
                    {category === "other" && (
                        <input type="text" className="input-block" placeholder="typing your category" value={other} onChange={(e)=>{setOther(e.target.value)}}/>
                        
                    )}
              
                </div>
                <div className="form-task col-span-3">
                    <label htmlFor="description">Description</label>
                    <textarea  id="description" className="resize-none input-block" rows={3}></textarea>
                </div>
               <div className="flex  gap-4 justify-end col-span-3 mt-2">
                    <span className="btn">Add</span>
                    <span className="btn bg-red-400! hover:bg-red-500!">Back</span>
               </div>
            </div>
        </div>
    )
}