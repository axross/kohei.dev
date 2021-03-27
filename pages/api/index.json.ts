import type { NextApiHandler } from "next";
import { getLocaleFromQueryWithFallback } from "../../helpers/i18n";
import { getIndexPageJson } from "../../services/cms-json";

const handler: NextApiHandler = async (req, res) => {
  const locale = getLocaleFromQueryWithFallback(req.query);
  const json = await getIndexPageJson({ locale });

  if (json === null) {
    res.statusCode = 404;
    res.end();

    return;
  }

  res.statusCode = 200;
  res.json(json);
};

export default handler;