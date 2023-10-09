import Hd from "../models/hdModel.js";

// Create new HD
const createHd = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an HD",
    });
  }

  const hd = new Hd(body);

  hd.save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: hd._id,
        message: "Hd Created",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Hd not created",
      });
    });
};

// Update a HD based on id
const updateHd = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must to provide a body to update",
    });
  }

  try {
    const hd = await Hd.findOne({ _id: req.params.id });

    hd.title = body.title;
    hd.size = body.size;
    hd.code = body.code;
    hd.qrcode = body.qrcode;

    hd.save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: hd._id,
          message: "Hd updated",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Movie not updated",
        });
      });
  } catch (err) {
    return res.status(404).json({
      err,
      message: "Hd not found!",
    });
  }
};

// delete an HD based on id
const deleteHd = async (req, res) => {
  try {
    const deleted_hd = await Hd.findOneAndDelete({ _id: req.params.id });

    if (!deleted_hd) {
      return res.status(404).json({
        success: false,
        error: "Hd not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: deleted_hd,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }
};

// Get all hds data
const getHds = async (req, res) => {
  try {
    const result = await Hd.find({});

    if (!result) {
      return res.status(404).json({
        success: false,
        error: "Hdds not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }
};

// Get the HD data based on id
const getHdById = async (req, res) => {
  try {
    const result = await Hd.findOne({ _id: req.params.id });

    if (!result) {
      return res.status(404).json({
        success: false,
        error: `Hd doesn't exists`,
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }
};

export default {
  createHd,
  updateHd,
  deleteHd,
  getHds,
  getHdById,
};
