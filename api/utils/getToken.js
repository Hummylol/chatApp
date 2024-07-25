import jwt from "jsonwebtoken";

const getToken = (userId, res) => {
	const token = jwt.sign({ userId }, "JWTSECRET", {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, 
		httpOnly: true, 
		sameSite: "strict", 
		secure: process.env.NODE_ENV !== "development",
	});
};

export default getToken;