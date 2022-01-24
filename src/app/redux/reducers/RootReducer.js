import { combineReducers } from 'redux'
import ScrumBoardReducer from './ScrumBoardReducer'
import NotificationReducer from './NotificationReducer'
import NavigationReducer from './NavigationReducer'
import billReducer from './BillReducer'
import BranchReducer from './BranchReducer'
import CustomerReducer from './CustomerReducer'
import invoiceReducer from './InvoiceReducer'
import SaleOrderReducer from './SaleOrderReducer'
import PurchaseOrderReducer from './PurchaseOrderReducer'
import UserReducer from './UserReducer'
import VendorReducer from './VendorReducer'
import WarehouseReducer from './WarehouseReducer'
import reducer from '../../redux/reducers/authReducer'
import ToastReducer from './toastReducer'
import RoleReducer from './RoleReducer'
import ProductReducer from './ProductReducer'
import reportReducer from './ReportReducer'
const RootReducer = combineReducers({
    toast: ToastReducer,
    notifications: NotificationReducer,
    navigations: NavigationReducer,
    scrumboard: ScrumBoardReducer,
    bill: billReducer,
    branch: BranchReducer,
    customer: CustomerReducer,
    invoice: invoiceReducer,
    saleorder: SaleOrderReducer,
    purchaseorder: PurchaseOrderReducer,
    user: UserReducer,
    vendor: VendorReducer,
    warehouse: WarehouseReducer,
    authReducer:reducer,
    role:RoleReducer,
    product:ProductReducer,
    report:reportReducer
})

export default RootReducer
