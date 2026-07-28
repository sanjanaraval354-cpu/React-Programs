function StudentMarks(props){
    return(
    <div>
      <h2>Academic Performance</h2>
      Internal Marks: {props.internal}<br />
      External Marks: {props.external}<br />
      Total Marks: {props.total}<br />
      Result: {props.result}<br />
    </div>
    );
}
export default StudentMarks;
