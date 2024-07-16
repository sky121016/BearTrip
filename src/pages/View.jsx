import React from "react";
import * as V from "./View.style";
import { useParams } from "react-router-dom";
import PostToolButton from "../components/common/PostToolButton";
import { SmallButton } from "../components/common/Button.style";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const View = () => {
  const postId = useParams();
  const navigate = useNavigate();

  const handleGoBack = ()=>{
    // 어디로 가야함?
    navigate('/');
  }

  return (
    <V.Wrapper>
      <V.Container>
        <V.Header>
          <V.Menu>
            {/* GoBack Button */}
            <SmallButton onClick={handleGoBack}>
              <IoIosArrowBack size={16}/>
            </SmallButton>
            <PostToolButton postId={postId} />
          </V.Menu>
          <V.Title>Title</V.Title>
          <V.Date>2024</V.Date>
        </V.Header>

        <V.ContentsContainer>
          <V.Contents>
            kjesfhjkehgkjshrkughrsif
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium sit aperiam veniam? Et at accusamus odit id minima, quia aspernatur dolores fugit alias labore enim, laborum, accusantium nostrum totam inventore?
          </V.Contents>
        </V.ContentsContainer>

      </V.Container>
    </V.Wrapper>
  );
};

export default View;
