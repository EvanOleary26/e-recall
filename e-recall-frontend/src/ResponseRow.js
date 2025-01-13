import { useEffect, useState } from "react";

function ResponseRow({response}) {
  
    return (
    <tr className="ResponseRow">
     <td>{response[0]}</td>
     <td>{response[1]}</td>
    </tr>
  );
  
}

export default ResponseRow;