import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import bg1 from "../assets/images /home_post.jpg";

class Nominations extends Component {
    render() {
        return (
            <div>
                <div className="bg-center bg-no-repeat h-64" style={{backgroundImage: `url(${bg1})`}}>
                    <div className="h-full w-full flex justify-center items-center text-white" style={{backgroundColor: 'rgba(0,0,0,0.85)'}}>
                        <h1 className="font-semibold uppercase text-center text-4xl">Nominations</h1>
                    </div>
                </div>
                <div className="px-24 mt-16">
                    <div className="grid grid-cols-3 row-gap-10 col-gap-5">
                        <div>
                            <TextField className="w-full" id="outlined-basic" label="Most Popular Song" variant="outlined" />
                        </div>
                        <div>
                            <TextField className="w-full" id="outlined-basic" label="Most Popular Student" variant="outlined" />
                        </div>
                        <div>
                            <TextField className="w-full" id="outlined-basic" label="Most Popular Song" variant="outlined" />
                        </div>
                        <div>
                            <TextField className="w-full" id="outlined-basic" label="Most Popular Song" variant="outlined" />
                        </div>
                        <div>
                            <TextField className="w-full" id="outlined-basic" label="Most Popular Song" variant="outlined" />
                        </div>
                        <div>
                            <TextField className="w-full" id="outlined-basic" label="Most Popular Song" variant="outlined" />
                        </div>
                        <div>
                            <TextField className="w-full" id="outlined-basic" label="Most Popular Song" variant="outlined" />
                        </div>
                        <div>
                            <TextField className="w-full" id="outlined-basic" label="Most Popular Song" variant="outlined" />
                        </div>
                        <div>
                            <TextField className="w-full" id="outlined-basic" label="Most Popular Song" variant="outlined" />
                        </div>
                        <div>
                            <TextField className="w-full" id="outlined-basic" label="Most Popular Song" variant="outlined" />
                        </div>
                        <div>
                            <TextField className="w-full" id="outlined-basic" label="Most Popular Song" variant="outlined" />
                        </div>
                        <div>
                            <TextField className="w-full" id="outlined-basic" label="Most Popular Song" variant="outlined" />
                        </div>

                        <Button className="col-start-2 " variant="contained" color="primary" disableElevation>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nominations;