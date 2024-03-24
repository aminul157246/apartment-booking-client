import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Apartment from "./Apartment";
import { useQuery } from "@tanstack/react-query";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";


const Apartments = () => {


    const [currentPage, setCurrentPage] = useState(0)
    const [itemPerPage, setItemPerPage] = useState(3)
    const [apartments, setApartments] = useState()

    // const axiosPublic = useAxiosPublic()
    // const { isPending, data: apartments } = useQuery({
    //     queryKey: ['apartment'],
    //     queryFn: async () => {
    //         const res = await axiosPublic('/apartment')
    //         return res.data;
    //     }
    // })
    // console.log(apartments);



    useEffect(() => {
        fetch(`http://localhost:5001/apartment?page=${currentPage}&size=${itemPerPage}`)
            .then(res => res.json())
            .then(data => setApartments(data))
    }, [currentPage, itemPerPage]);


    const totalItem = apartments?.length;
    console.log(totalItem);
    // const itemPerPage = 3;
    const numberOfPages = Math.ceil(totalItem / itemPerPage)

    const pages = []
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i)
    }
    console.log(pages);


    const handleItemPerPage = e => {
        const value = parseInt(e.target.value)
        console.log(value);
        setItemPerPage(value)
        setCurrentPage(0)
    }

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    console.log(currentPage);








    // if (isPending) {
    //     return <div className="flex justify-center items-center">
    //         <p> <span className="loading loading-bars loading-lg"></span></p>
    //     </div>
    // }


    return (

        <div>




            <h3 className="text-5xl mt-12 mb-4 font-semibold">Our choice of <br />
                popular real estate</h3>

            <div className="grid grid-cols-3 gap-6 ">

                {
                    apartments?.map((item) => <Apartment item={item} key={item._id} ></Apartment>)
                }

            </div>

            <div className="flex justify-center items-center pagination">
                {/* <div className="text-2xl pt-10">
                    <button onClick={handlePrev}><BiLeftArrowAlt /></button>
                </div> */}
                {
                    pages.map(page => <div className=" bg-red-200 ml-2 px-4 py-2 mt-8 " key={page}><button className={currentPage === page && 'font-bold text-xl'} onClick={() => setCurrentPage(page)} >
                        {/* {page} */} Grid items by 
                    </button></div>)
                }
                <select className="mt-8" name="" value={itemPerPage} id="" onChange={handleItemPerPage}>
                    <option  value="3"><span>3</span></option>
                    <option  value="6"><span>6</span></option>
                    <option  value="9"><span>9</span></option>
                </select>
                {/* <div className="text-2xl pt-10">
                    <button onClick={handleNext}><BiRightArrowAlt /></button>
                </div> */}
            </div>
        </div>
    );
};

export default Apartments;