import { IconBaseProps } from 'react-icons';
import { IoIosArrowDropright } from 'react-icons/io';
import { AiOutlineFilePdf, AiOutlineLink } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';
import { LuFileText } from 'react-icons/lu';
import { PiNewspaperClippingLight } from 'react-icons/pi';

//Ai
export const OutlineFilePdf = (props: IconBaseProps) => <AiOutlineFilePdf {...props} />
export const OutlineLink = (props: IconBaseProps) => <AiOutlineLink {...props} />

//Io
export const ArrowDropright = (props: IconBaseProps) => <IoIosArrowDropright {...props} />

//Fi
export const ArrowUpRight = (props: IconBaseProps) => <FiArrowUpRight {...props} />

//Lu
export const FileText = (props: IconBaseProps) => <LuFileText {...props} />

//Pi
export const Newspaper = (props: IconBaseProps) => <PiNewspaperClippingLight {...props} /> 
