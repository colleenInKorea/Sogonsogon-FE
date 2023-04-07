import React from 'react'
import styled from 'styled-components'
import SelectBtnContainer from '../components/SelectBtnContainer';
import { ReactComponent as PlayBtn } from '../asset/icon/play_arrow.svg';
import { AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


function ClipList({ editClicked, state, setState, selectedContent, contentId }) {
    const navigate = useNavigate()

    const handleClick = () => {
        if (editClicked === true) {
            document.startViewTransition(() => navigate(`/modifyclip/1`));
        } else {
            document.startViewTransition(() => navigate(`/clipplay/1`));
        }
    };

    return (
        <>
            <AllClipsLayout>
                <AllClipsInfoContainer>
                    <AllClipsEpisodeLayout>6회차</AllClipsEpisodeLayout>
                </AllClipsInfoContainer>
                <AllClicpsDescContainer>
                    <SelectBtnContainer
                        editClicked={editClicked}
                        state={state}
                        setState={setState}
                        selectedContent={selectedContent}
                    // contentId={contentId}
                    />
                    {!editClicked && (
                        <><AllCilpsMiniBox />
                            <AllClipsDotted />
                            <AllClipsDottedLine />
                            <AllClipsDotted2 />

                        </>
                    )

                    }
                    <AudioCilpImg />
                    <AllClicpsDescLayout onClick={handleClick}>
                        <AllClicpsTitleLayout>오늘은 비가 오네요. 비오는 날 어울리는 노래 들려드려요.</AllClicpsTitleLayout>
                        <AllClicpsHeartContianer>
                            <div>오늘</div>
                            <div>58분</div>
                            <AiOutlineHeart size={18} color={"77756f"} />
                            <div>106</div>
                            <StPlayBtnSvg />
                            <div>33 </div>
                        </AllClicpsHeartContianer>
                    </AllClicpsDescLayout>
                </AllClicpsDescContainer>
            </AllClipsLayout>

        </>
    )
}

export default ClipList


const AllClipsLayout = styled.div`
     position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    min-height: 140px;
    padding: 10px 20px 10px 10px;
`

const AudioCilpImg = styled.div`
    min-width: 75px;
    max-height: 75px;
    overflow: hidden;
    position: relative;
    background-color: #393b3a6e;
    border-radius: 10px;
    margin: 0px 15px 0px 15px;
    background-image: ${({ backgroundImageUrl }) => `url(${backgroundImageUrl})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    align-items: flex-end;
    display: flex;
    flex-direction: row-reverse;
    transition: all 0.5s ease-in-out 0s;
    :hover {
        transform: scale(1);
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease-in-out 0s;
    }
`

const AllClipsInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px 0px 5px 55px;
`

const AllClicpsDescContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px 0px 0px 5px;
`

const AllClicpsDescLayout = styled.div`
    cursor: pointer;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const AllClicpsTitleLayout = styled.div`
    line-height: 23px;
    font-size: 18px;
    font-weight: 550;
`

const AllClicpsHeartContianer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;

    div{
        margin: 0px 7px 0px 0px;
        font-size: 17px;
        color: #77756f;
    }
`

const AllClipsDottedLine = styled.div`
    position: absolute;
    left: 35px;
    top: 20px;
    width: 1px;
    height: 140px;
    border: 1px dotted #77756f;
`
const AllClipsDotted = styled.div`
    position: absolute;
    top: 16px;
    left: 33px;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color:#77756f ;
`
const AllClipsDotted2 = styled.div`
    position: absolute;
    top: 156px;
    left: 33px;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color:#77756f ;
`

const AllCilpsMiniBox = styled.div`
    min-width: 35px;
`
const StPlayBtnSvg = styled(PlayBtn)`
    width: 23px;
    height: 23px;
    color: #77756f;
`
const AllClipsEpisodeLayout = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 4px 6px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #ff9900;
    background-color: #fff5e3;
`