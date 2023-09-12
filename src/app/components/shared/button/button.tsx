import Icon from 'react-native-vector-icons/AntDesign'
import { FaBeer } from "react-icons/fa";
import Link from 'next/link'

const Button = ({linkUrl}) => {
  const url = {linkUrl}
  console.log(url)

    return(
        <>
          <Link
            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
            href={linkUrl}
          >
          <FaBeer />
          </Link>
        </>
    )
}

export default Button