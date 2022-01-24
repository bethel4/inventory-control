import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid } from '@material-ui/data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Icon, IconButton } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { useHistory } from 'react-router-dom'
import { Breadcrumb } from 'app/components'
import { getRole } from '../../redux/actions/roleAction'
import MUIDataTable, { TableFilterList } from 'mui-datatables'
import Checkbox from '@material-ui/core/Checkbox'
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
} from '@material-ui/core'

const users = [
    {
        id: 1,
        name: 'Item',
        permission: { read: true, write: true, update: true, delete: true },
    },
    {
        id: 2,
        name: 'Composite Items',
        permission: { read: true, write: true, update: true, delete: true },
    },
    {
        id: 3,
        name: 'Transfer Orders',
        permission: { write: true, read: true, update: true, delete: true },
    },
    {
        id: 4,
        name: 'Price List',
        permission: { write: true, read: true, update: true, delete: true },
    },
]
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))

let cartListLoaded = false
const CustomerList = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { roleList } = useSelector((state) => state.role)
    const theme = useTheme()
    const classes = useStyles()
    var newroleList = []
    var rightList = []
    const [state, setState] = React.useState({
        read: true,
        checkedB: true,
        checkedF: true,
    })

    if (!cartListLoaded) {
        dispatch(getRole())
        cartListLoaded = true
    }

    //console.log(roleList)
    // for (var i = 0; i < roleList.length; i++) {
    //     //console.log(roleList[0][1])
    //     for (var j = 0; j < roleList[i].length; j++) {
    //         newroleList.push(roleList[i][j])
    //         rightList.push(newroleList[i].url[i].right)
    //     }

    //     console.log(rightList)
    // }
    const handleChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.value })
        console.log(name)
    }

    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <div className="w-full overflow-auto">
                    <Table className="whitespace-pre">
                        <TableHead>
                            <TableRow>
                                <TableCell className="px-0">Name</TableCell>
                                <TableCell className="px-0">Company</TableCell>
                                <TableCell className="px-0">
                                    Start Date
                                </TableCell>
                                <TableCell className="px-0">Status</TableCell>
                                <TableCell className="px-0">Amount</TableCell>
                                <TableCell className="px-0">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((subscriber, index) => (
                                <TableRow key={index}>
                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                    >
                                        {subscriber.name}
                                    </TableCell>

                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                    >
                                        <Checkbox
                                            checked={state.read}
                                            value={subscriber.permission.read}
                                            onChange={handleChange(
                                                subscriber.permission.read
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell className="px-0 capitalize"></TableCell>
                                    <TableCell className="px-0 capitalize">
                                        <Checkbox
                                            checked={state.read}
                                            onChange={handleChange('read')}
                                            value="read"
                                            inputProps={{
                                                'aria-label':
                                                    'primary checkbox',
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell className="px-0">
                                        <IconButton>
                                            <Icon color="error">close</Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </Fragment>
    )
}

export default CustomerList
