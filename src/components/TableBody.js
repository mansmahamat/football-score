import React from 'react'

const TableBody = (props) => {
    return (
        <table className="standings">
            <tbody>
                <tr className="table-head">
                    <td className="team-position">
                        #
                    </td>
                    <td className="team-name">
                        Club
                    </td>
                    <td title="Matches joué">
                        MJ
                    </td>
                    <td title="Victoire">
                        V
                    </td>
                    <td title="Nul">
                        N
                    </td>
                    <td title="Perdu">
                        P
                    </td>
                    <td title="But pour">
                        BP
                    </td>
                    <td title="But contre">
                        BC
                    </td>
                    <td title="Différence de but">
                        DB
                    </td>
                    <td title="Points">
                        Pts
                    </td>
                </tr>
                {props.children}
            </tbody>
        </table>
    )
}

export default TableBody