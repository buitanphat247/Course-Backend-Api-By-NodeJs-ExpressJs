const delete_single_customer = async (req, res, customer_collection) => {
  try {
    const result = await customer_collection.findOneAndUpdate(
      { _id: req.body.id },
      {
        deleted: true,
      }
    );
    return {
      error: 0,
      message: "delete success",
      success: result,
    };
  } catch (error) {
    return {
      error: 1,
      message: error,
      success: [],
    };
  }
};

module.exports = delete_single_customer;
