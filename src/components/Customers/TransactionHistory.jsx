import React, { useEffect, useState } from "react";
import SideNav from "../../layouts/SideNav";
import {
  useGetHistoryQuery,
  useDeleteHistoryMutation,
} from "../../apis/History/HistorySlice";
import toast from "react-hot-toast";
import MUIDataTable from "mui-datatables";

function TransactionHistory() {
  const { data, error, isLoading } = useGetHistoryQuery();
  const [deleteHistory, { isSuccess, isError }] = useDeleteHistoryMutation();

  const handleDeleteHistory = async (id) => {
    const res = await deleteHistory(id);
    console.log(res);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("History Deleted Successfully");
    } else if (isError) {
      toast.error("Something went wrong");
    }
  }, [isSuccess, isError]);

  const columns = [
    "Name",
    "Email",
    "Payment Status",
    "Subscription Date",
    "Amount",
    {
      name: "Action",
      options: {
        customBodyRenderLite: (dataIndex) => {
          const transaction = data?.transactions[dataIndex];
          console.log(transaction._id);
          return (
            <button
              style={{
                backgroundColor: "#ff4d4d",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "none",
              }}
              onClick={() => handleDeleteHistory(transaction._id)}
            >
              Delete
            </button>
          );
        },
      },
    },
  ];

  const Data = data?.transactions?.map((transaction) => [
    transaction?.user?.username,
    transaction?.user?.email,
    transaction?.paymentStatus,
    new Date(transaction?.user?.createdAt).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    "$" + transaction?.amount,
  ]);

  const options = {
    expandableRowsHeader: false,
    expandableRows: true,
    selectableRows: "none",
    expandableRowsOnClick: true,

    renderExpandableRow: (rowData, rowMeta) => {
      const colSpan = rowData.length + 1;
      const transaction = data?.transactions[rowMeta.dataIndex];
      const addons = transaction?.subscriptionDetails?.addons || [];
      const engineSuits = transaction?.subscriptionDetails?.engineSuits || [];

      return (
        <tr>
          <td colSpan={colSpan} style={{ marginTop: "20px" }}>
            {/* MUIDataTable for Subscription Details */}
            <MUIDataTable
              title={"Subscription Details"}
              data={[
                [
                  transaction?.subscriptionDetails?.plan?.title,
                  "$" + transaction?.subscriptionDetails?.plan?.price,
                  transaction?.subscriptionDetails?.plan?.period,
                ],
              ]}
              columns={["Title", "Price", "Period"]}
              options={{
                selectableRows: "none",
                search: false,
                download: false,
                print: false,
                viewColumns: false,
                pagination: false,
                filter: false,
                sort: false,
                expandableRowsHeader: false,
              }}
            />

            {/* Add some gap */}
            <div style={{ marginBottom: "20px" }}></div>

            {addons.length > 0 && (
              <>
                {/* MUIDataTable for Addons */}
                <MUIDataTable
                  title={"Addons"}
                  data={addons.map((addon) => [
                    addon.title,
                    "$" + addon.price,
                    addon.quantity,
                    "$" + addon.price * addon.quantity,
                  ])}
                  columns={["Title", "Price", "Quantity", "Total Price"]}
                  options={{
                    selectableRows: "none",
                    search: false,
                    download: false,
                    print: false,
                    viewColumns: false,
                    pagination: false,
                    filter: false,
                    sort: false,
                    expandableRowsHeader: false,
                  }}
                />
              </>
            )}

            {/* Add some gap */}
            <div style={{ marginBottom: "20px" }}></div>

            {/* MUIDataTable for Engine Suites */}

            {engineSuits.length > 0 && (
              <>
                {/* MUIDataTable for Engine Suites */}
                <MUIDataTable
                  title={"Engine Suites"}
                  data={engineSuits?.map((engineSuite) => [
                    engineSuite.title,
                    "$" + engineSuite.price,
                    engineSuite.quantity,
                    "$" + engineSuite.price * engineSuite.quantity,
                  ])}
                  columns={["Title", "Price", "Quantity", "Total Price"]}
                  options={{
                    selectableRows: "none",
                    download: false,
                    print: false,
                    viewColumns: false,
                    expandableRowsHeader: false,
                  }}
                />
              </>
            )}
          </td>
        </tr>
      );
    },
  };

  return (
    <SideNav>
      <section className="lg:flex bg-gray-50 lg:h-screen font-poppins">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <MUIDataTable
            title={"Transcation History"}
            data={Data}
            columns={columns}
            options={options}
          />
        </div>
      </section>
    </SideNav>
  );
}

export default TransactionHistory;
