import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

    return (
        <div className="post">

            <div className='post__content'>
                <div class="flip-container" ontouchstart="this.classList.toggle('click');">
                    <div class="flipper">
                        <div class="front">
                            <strong> {props.number}. {props.post.question}</strong>
                            <div>
                                category: {props.post.category.title}

                            </div>

                        </div>
                        <div class="back">
                                <strong>{props.post.answer}</strong>
                                <div className='post__btns'>
                                    <MyButton onClick={() => props.remove(props.post)}>Delete question</MyButton>
                                </div>
                            </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default PostItem;

{/* <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                    <div class="flipper">
                        <div class="front">
                            <!-- front content -->
                        </div>
                        <div class="back">
                            <!-- back content -->
                        </div>
                    </div>
</div> */}