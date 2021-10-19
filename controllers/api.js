const csv = require("csvtojson");
exports.findData = async (req, res, next) => {
	try {
		let responseObject;
		const data = await csv().fromFile("data/data.csv");
		let isFound = data.filter((item) => {
			return item["Student Email"] === req.body.email;
		});
		if (isFound.length > 0) {
			responseObject = {
				status: "success",
				data: {
					Track1: isFound[0][
						"# of Skill Badges Completed in Track 1"
					],
					Track2: isFound[0][
						"# of Skill Badges Completed in Track 2"
					],
				},
			};
			res.status(200).send(responseObject);
		} else {
			responseObject = {
				status: "error",
				message: "Email not found",
			};
			res.status(404).send(responseObject);
		}
	} catch (error) {
		responseObject = {
			status: "error",
			message: "Something went wrong!",
		};
		res.status(500).send(responseObject);
	}
};

exports.leaderboard = async (req, res, next) => {
	let responseObject;
	try {
		const data = await csv().fromFile("data/data.csv");
		data.map((elem) => {
			elem["totalQuest"] =
				parseInt(elem["# of Skill Badges Completed in Track 1"]) +
				parseInt(elem["# of Skill Badges Completed in Track 2"]);
		});
		let sortedData = data.sort((a, b) => {
			return b["totalQuest"] - a["totalQuest"];
		});
		// let topTen = sortedData.slice(0, 10);
		responseObject = {
			status: "success",
			data: sortedData,
		};
		res.status(200).send(responseObject);
	} catch (error) {
		responseObject = {
			status: "error",
			message: "Something went wrong!",
		};
		res.status(500).send(responseObject);
	}
};
