exports.generateFilter = (query) => {
    let filters = {};
    console.log(query);
    if (query.ids) {
        filters = {
            ...filters,
            "audios.reference_text_id": { "$in": query?.ids?.split(",") },
        };
    }
    if (query.fromDate) {
        filters.time = {
            ...filters.time,
            ...{ "$gte": query?.fromDate },
        };
    }
    if (query.toDate) {
        filters.time = {
            ...filters.time,
            ...{ "$lt": query?.toDate },
        };
    }
    return filters;
};

exports.jsonFilter = (data, res) => {
    const x = data.forEach((obj) =>
        Object.keys(obj).map((r) => {
            if (["audio_id", "s3_url", "reference_text_id"].indexOf(r) < 0) {
                res.status(400).json({
                    status: 0,
                    requestId: null,
                    message: "Inavlid Json FOrmat",
                    error: "",
                });
                next();
            }
        })
    );
};

