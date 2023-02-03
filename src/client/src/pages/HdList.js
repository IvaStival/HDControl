import { useFetchHdsQuery } from '../store';

import Table from '../components/Table';
import Button from '../components/Button';

import { useNavigate } from 'react-router-dom';

import './HdList.css';

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
            render: (hd) => (<div className='btn-container'>
                                <Button className="btn-crud" primary rounded onClick={() => handleAddHd(hd)}>
                                    Edit
                                </Button>
                                <Button className="btn-crud btn-del" secondary rounded>
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
    } else if(error){
        content = <div>Error Fetchinf Hds!</div>
    } else{
        content = <Table data={data} config={config} keyFn={keyFn}/>
    }
    
    return (
        <div className='content'>
            <Button onClick={handleAddHd} className="btn-add" primary rounded>+</Button>
            {content}
        </div>
    );
};

export default HdList;