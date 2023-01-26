import { useFetchHdsQuery } from '../store';

import Table from '../components/Table';
import Button from '../components/Button';

import { useNavigate } from 'react-router-dom';

const HdList = () => {
    const { data, error, isFetching } = useFetchHdsQuery();
    const navigate = useNavigate();
    const config = [
        {
            label: "Hd Title",
            render: (hd) => hd.title,
            highLight: true
        },
        {
            label: "Size",
            render: (hd) => hd.size
        },
        {
            label: "Code",
            render: (hd) => hd.code
        },
        {
            label: "QR",
            render: (hd) => hd.qrcode
        },
        {
            label: '',
            render: (hd) => (<div className='flex flex-row float-right'>
                                <Button className="w-16 mr-1" primary rounded onClick={() => handleAddHd(hd)}>
                                    Edit
                                </Button>
                                <Button className="w-16" secondary rounded>
                                    Delete
                                </Button>
                            </div>)              
        }
    ]

    const handleAddHd = (hd) => {
        navigate('/create');
    }

    const keyFn = (hd) => {
        return hd.title
    }
    
    let content;
    if(isFetching){
        content = <div>Fetching Data</div>
    }
    else if(error){
        content = <div>Error Fetchinf Hds!</div>
    }
    else{
        content = <Table data={data} config={config} keyFn={keyFn}/>
    }
    
    console.log(data)
    return (
        <div className='px-2 py-2 content-table'>
            <Button onClick={handleAddHd} className="relative float-right w-10 my-2" primary rounded>+</Button>
            {content}
        </div>
    );
};

export default HdList;