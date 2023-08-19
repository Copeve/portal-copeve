import { IconBaseProps } from 'react-icons';
import { IoIosArrowDropright } from 'react-icons/io';
import { AiOutlineFilePdf, AiOutlineLink } from 'react-icons/ai';
import {
	FiArrowUpRight,
	FiChevronUp,
	FiChevronDown,
	FiChevronRight,
	FiChevronLeft
} from 'react-icons/fi';
import { LuFileText } from 'react-icons/lu';
import { PiNewspaperClippingLight } from 'react-icons/pi';

//Ai
export const OutlineFilePdf = (props: IconBaseProps) => (
	<AiOutlineFilePdf {...props} />
);
export const OutlineLink = (props: IconBaseProps) => (
	<AiOutlineLink {...props} />
);

//Io
export const ArrowDropright = (props: IconBaseProps) => (
	<IoIosArrowDropright {...props} />
);

//Fi
export const ArrowUpRight = (props: IconBaseProps) => (
	<FiArrowUpRight {...props} />
);
export const ChevronUp = (props: IconBaseProps) => <FiChevronUp {...props} />;
export const ChevronDown = (props: IconBaseProps) => (
	<FiChevronDown {...props} />
);
export const ChevronLeft = (props: IconBaseProps) => (
	<FiChevronLeft {...props} />
);
export const ChevronRight = (props: IconBaseProps) => (
	<FiChevronRight {...props} />
);

//Lu
export const FileText = (props: IconBaseProps) => <LuFileText {...props} />;

//Pi
export const Newspaper = (props: IconBaseProps) => (
	<PiNewspaperClippingLight {...props} />
);
