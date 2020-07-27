select postID
from post
order by postID desc
limit 1;
INSERT INTO dishPost (dishID, postID)
VALUES (
    (
      SELECT dishID
      FROM dish
      WHERE dishName = $ { req.body.dishName }
    ),
    (
      select postID
      from post
      order by postID desc
      limit 1
    ),;