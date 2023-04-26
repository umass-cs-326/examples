# 01-mongodb-ops

This example demonstrates how to connect to an Atlas MongoDB cluster and perform some basic operations. In particular, it shows how to:

1. Connect to the cluster using `mongosh` and perform CRUD operations.
2. Connect to the cluster from a Node.js application using the `mongodb` driver.

## Connecting to the cluster

At this point, you should already have created an account and MongoDB cluster on the [Atlas MongoDB](https://www.mongodb.com/cloud/atlas/efficiency) and downloaded [`mongosh`](https://www.mongodb.com/docs/mongodb-shell/install/). If you haven't already, please do so now.

The first step is to connect to the cluster. To do this, you'll need to specify the cluster's name and the username and password of the account you created. You can easily find the connection information from the Atlas dashboard when you are logged into Atlas. Naturally, you should have remembered your username and password as this will be important to connect to the cluster. To get the connection information, you need to visit the **Database Deployments** page in the Atlas dashboard.

![](../../pics/atlas-dashboard-db-deployments.png)

Next, you want to click on the **Connect** button. This will allow you to get the connection information for a variety of ways to connect to the cluster. We will choose the **MongoDB Shell** connection method in this first example.

![](../../pics/atlas-connection-mongosh.png)

This will open another dialog box where you will be able to download the `mongosh` executable and use the provided _connection string_ to connect to the cluster. First, you want to download and install the `mongosh` executable according to the platform you are developing on if you haven't already done so. Note, on a Mac, you will need to first install the [`brew`](https://brew.sh/) package manager. After you have installed `mongosh`, you can run it from a terminal/console using the command shown in step 2 of the following figure. Note, this might be slightly different for you since it will depend on your cluster ID, database name, and username.

![](../../pics/atlast-mongosh-connect-string.png)
