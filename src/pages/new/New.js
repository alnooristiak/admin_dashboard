import React, { useState } from 'react';
import NavBar from '../../components/navBar/NavBar';
import SideBar from '../../components/sideBar/SideBar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("");

    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className="_sidebar col-span-2 p-4">
                <SideBar />
            </div>
            <div className="_sidebar col-span-10 p-4">
                <NavBar />
                <div>
                    <h2>{title}</h2>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className="_sidebar col-span-4 p-4">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTadiAkyqUYNIZACGiJmjavq2jzl4bL0EJTQ&usqp=CAU"
                                className='w-36 h-36 mr-3 rounded-full'
                                alt="" />
                        </div>
                        {/* form sec */}
                        <div className="_sidebar col-span-8 p-4">
                            <form class="w-full max-w-lg">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                                {inputs.map((input) => (
                                    <div className="formInput" key={input.id}>
                                        <label>{input.label}</label>
                                        <input type={input.type} placeholder={input.placeholder} />
                                    </div>
                                ))}
                                <button>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;