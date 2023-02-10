import classes from "./Drawing.module.css";
const Head = (
    <div style={{
        width: '50px',
        height: '50px',
        borderRadius: "100%",
        border: "10px solid rgb(49, 49, 49)",
        position:  "absolute",
        top: "50px",
        right: "-30px"
    }}/>
)

const Body = (
    <div style={{
        width: '10px',
        height: '100px',
        background: "rgb(49, 49, 49)",
        position:  "absolute",
        top: "120px",
        right: "0px"
    }}/>
)

const RightArm = (
    <div style={{
        width: '100px',
        height: '10px',
        background: "rgb(49, 49, 49)",
        position:  "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom"
    }}/>
)

const LeftArm = (
    <div style={{
        width: '100px',
        height: '10px',
        background: "rgb(49, 49, 49)",
        position:  "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom"
    }}/>
)

const RightLeg = (
    <div style={{
        width: '100px',
        height: '10px',
        background: "rgb(49, 49, 49)",
        position:  "absolute",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom"
    }}/>
)

const LeftLeg = (
    <div style={{
        width: '100px',
        height: '10px',
        background: "rgb(49, 49, 49)",
        position:  "absolute",
        top: "210px",
        right: "0",
        rotate: "-60deg",
        transformOrigin: "right bottom"
    }}/>
)

const hangmanBody = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

type DrawingProps = {
    numberofGuesses : number
}
export function Drawing ( {numberofGuesses} : DrawingProps  ) {
    console.log(numberofGuesses,'???')

    return (
        <div className={classes.container}>
        {hangmanBody.slice(0, numberofGuesses)}
        <div className={classes.base} />
        <div className={classes.hangerTop}/>
        <div className={classes.hangerPole}        />
        <div className={classes.hangerBase}/>
      </div>
    )
  }
    