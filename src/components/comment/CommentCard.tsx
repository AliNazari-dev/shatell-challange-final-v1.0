import { Comment } from "@/types/types";
import Image from "next/image";

interface CommentCardProps {
  comment: {
    userImage: string;
    userName: string;
    timestamp: string;
    commentText: string;
  };
}

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <div className='bg-white shadow-md rounded-md p-4'>
      <div className='flex items-center mb-4'>
        <Image
          alt=''
          src={comment.userImage}
          width={40}
          height={40}
          className='w-10 h-10 rounded-full mr-4'
        />
        <div>
          <h3 className='text-lg font-semibold'>{comment.userName}</h3>
          <p className='text-gray-500'>{comment.timestamp}</p>
        </div>
      </div>
      <p className='text-gray-800'>{comment.commentText}</p>
    </div>
  );
};

export default CommentCard;
