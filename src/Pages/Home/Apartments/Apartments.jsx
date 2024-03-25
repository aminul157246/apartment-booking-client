import { useEffect, useState } from "react";
import Apartment from "./Apartment";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";


const Apartments = () => {


    const [apartments, setApartments] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [itemPerPage, setItemPerPage] = useState(6)

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
        fetch(`https://apartment-booking-server.vercel.app/apartment?page=${currentPage}&size=${itemPerPage}`)
            .then(res => res.json())
            .then(data => setApartments(data))
    }, [currentPage, itemPerPage]);

console.log(apartments);
    const totalItem = apartments?.length;
    console.log(totalItem);
    // const itemPerPage = 3;
    const numberOfPages = Math.ceil(totalItem / itemPerPage)

    const pages = []
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i)
    }
    console.log(pages);


    const handleItemPerPage = (e) => {
        const value = parseInt(e.target.value)
        console.log(value);
        setItemPerPage(value)
        setCurrentPage(0)
    }

    // const handlePrev = () => {
    //     if (currentPage > 0) {
    //         setCurrentPage(currentPage - 1)
    //     }
    // }

    // const handleNext = () => {
    //     if (currentPage < pages.length - 1) {
    //         setCurrentPage(currentPage + 1)
    //     }
    // }

    // console.log(currentPage);








    // if (isPending) {
    //     return <div className="flex justify-center items-center">
    //         <p> <span className="loading loading-bars loading-lg"></span></p>
    //     </div>
    // }


    return (

        <div>



            <h3 className="text-3xl font-textStyle lg:text-5xl p-5 mt-12  font-semibold">Our choice of  <br />
                <span className="ml-16">
                popular real estate
                    </span></h3>

            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

                {
                    apartments?.map((item) => <Apartment item={item} key={item._id} ></Apartment>)
                }

            </div>

            <div className="flex justify-center items-center pagination">
                {/* <div className="text-2xl pt-10">
                    <button onClick={handlePrev}><BiLeftArrowAlt /></button>
                </div> */}
                {
                    pages.map(page => <div className=" font-textStyle border-4 bg-white ml-2 px-4 py-2 mt-8 " key={page}><button className={currentPage === page && 'font-bold text-xl'} onClick={() => setCurrentPage(page)} >
                        {/* {page} */} Grid items by 
                    </button></div>)
                }

                <select className="mt-8" name="" value={itemPerPage} id="" onChange={handleItemPerPage}>
                    <option  value="3">3</option>
                    <option  value="6">6</option>
                    <option  value="9">9</option>
                </select>
                {/* <div className="text-2xl pt-10">
                    <button onClick={handleNext}><BiRightArrowAlt /></button>
                </div> */}
            </div>
        </div>
    );
};

export default Apartments;