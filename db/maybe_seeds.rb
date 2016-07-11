{tag: "japan"},
{tag: "gardens"},
{tag: "water"},
{tag: "blossom"},
{tag: "amazing"},
{tag: "waterfall"},
{tag: "tower"},
{tag: "amazon rainforest"},
{tag: "stream"},
{tag: "beautiful"},
{tag: "scenic"},
{tag: "forest"},
{tag: "pretty"},
{tag: "italy"},
{tag: "town"},
{tag: "villa"},
{tag: "boats"},
{tag: "manarola"},
{tag: "cliffs"},
{tag: "coliseum"},
{tag: "rome"},
{tag: "touristy"},
{tag: "pisa"},
{tag: "urgent"},
{tag: "reminder"},
{tag: "remember"},
{tag: "gym"},
{tag: "one day"},
{tag: "cheesecake"},
{tag: "topics"},
{tag: "cake"},
{tag: "pie"},
{tag: "games"},
{tag: "party"},
{tag: "fun"},
{tag: "social"},
{tag: "food"},
{tag: "gathering"},
{tag: "vacation"},
{tag: "game night"},
{tag: "travel"}

Board.create!([
  {creator_id: 4, title: "Love Notes", description: "Sending a love message", board_style: "http://res.cloudinary.com/arkean/image/upload/c_scale,h_800/v1467909599/corkboard-purple_v4vmlu.jpg", hidden: nil},
  {creator_id: 1, title: "Dreams of traveling", description: "Places we should go!!", board_style: "http://res.cloudinary.com/arkean/image/upload/c_scale,h_800/v1467909589/corkboard-green_jby46h.jpg", hidden: nil},
  {creator_id: 1, title: "All the pins", description: "Variations of all the pin backgrounds", board_style: "http://res.cloudinary.com/arkean/image/upload/c_scale,h_800/v1467679359/corkboard_x2gpyn.jpg", hidden: nil},
  {creator_id: 1, title: "", description: "", board_style: "http://res.cloudinary.com/arkean/image/upload/c_scale,h_800/v1467679359/corkboard_x2gpyn.jpg", hidden: true},
  {creator_id: 1, title: "Try out the sorts", description: "Add a few pics, text notes and tags and try out the sorting!", board_style: "http://res.cloudinary.com/arkean/image/upload/c_scale,h_800/v1467909950/Quatrefoil-Corkboard_eqq8kn.jpg", hidden: nil}
])
Pin.create!([
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-black_l5ztxz.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-purple_ixwtyk.png", img_url: nil, posX: 521, posY: 482, zIndex: 43},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-blue_gyqktr.png", note_color: nil, img_url: "http://res.cloudinary.com/arkean/image/upload/w_250,h_166,c_fill,g_face/v1468009517/xb3z8nibvt9quiecknq6.jpg", posX: 526, posY: 348, zIndex: 60},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-brown-decorated_zlcljd.png", img_url: nil, posX: 583, posY: 524, zIndex: 44},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-gold_x1xesf.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-green_cle3ps.png", img_url: nil, posX: 357, posY: 299, zIndex: 37},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-blue_gyqktr.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-burnt-orange_uuj2zx.png", img_url: nil, posX: 665, posY: 479, zIndex: 45},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-red_jjgvcx.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-pink-stripe_bqkv86.png", img_url: nil, posX: 575, posY: 130, zIndex: 4},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-purple_wndk5t.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/st-flowers_k1hjcq.png", img_url: nil, posX: 484, posY: 88, zIndex: 6},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-blue_gyqktr.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-purple-stripe_qho3fo.png", img_url: nil, posX: 382, posY: 46, zIndex: 7},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-blue_gyqktr.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-fancy_zeu6ii.png", img_url: nil, posX: 754, posY: 431, zIndex: 46},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-blue_gyqktr.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-burnt-orange_uuj2zx.png", img_url: nil, posX: 314, posY: 101, zIndex: 8},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-purple_wndk5t.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-burnt-orange_uuj2zx.png", img_url: nil, posX: 900, posY: 242, zIndex: 50},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-black_l5ztxz.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-purple-checkered_etg2ah.png", img_url: nil, posX: 285, posY: 150, zIndex: 38},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-blue_gyqktr.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-green_cle3ps.png", img_url: nil, posX: 796, posY: 367, zIndex: 47},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-gold_x1xesf.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825758/st-green-stripe_iwaoyx.png", img_url: nil, posX: 917, posY: 146, zIndex: 52},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-red_jjgvcx.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/st-faded-stripe_iikpya.png", img_url: nil, posX: 858, posY: 96, zIndex: 53},
  {user_id: 1, board_id: 2, title: "SO MANY PLACES!", body: "which to choose?", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-red_jjgvcx.png", note_color: nil, img_url: "http://res.cloudinary.com/arkean/image/upload/w_250,h_166,c_fill,g_face/v1468009652/b1w1ugw00j8qgsw1ztic.jpg", posX: 570, posY: 0, zIndex: 92},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-black_l5ztxz.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-pink-purple-stripe_zgwzca.png", img_url: nil, posX: 761, posY: 47, zIndex: 54},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-red_jjgvcx.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-blue_gv4cjs.png", img_url: nil, posX: 306, posY: 235, zIndex: 39},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-gold_nc2k3g.png", img_url: nil, posX: 399, posY: 378, zIndex: 40},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-red_jjgvcx.png", note_color: nil, img_url: "http://res.cloudinary.com/arkean/image/upload/w_250,h_166,c_fill,g_face/v1468008010/liqzickv7jjpnknqn8u2.jpg", posX: 450, posY: 193, zIndex: 58},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-green_vkb5ve.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825754/st-white_kxwyau.png", img_url: nil, posX: 858, posY: 301, zIndex: 48},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-red_jjgvcx.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-blue_gv4cjs.png", img_url: nil, posX: 664, posY: 93, zIndex: 55},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: nil, img_url: "http://res.cloudinary.com/arkean/image/upload/w_166,h_250,c_fill,g_face/v1468009447/hifhyf27aln4m0bnh5mi.jpg", posX: 721, posY: 159, zIndex: 59},
  {user_id: 4, board_id: 1, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-purple_wndk5t.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/st-faded-stripe_iikpya.png", img_url: nil, posX: 462, posY: 434, zIndex: 42},
  {user_id: 4, board_id: 3, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825758/st-green-stripe_iwaoyx.png", img_url: nil, posX: 674, posY: 177, zIndex: 16},
  {user_id: 1, board_id: 2, title: "Amazon Rainforest", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-blue_gyqktr.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-blue_gv4cjs.png", img_url: nil, posX: 803, posY: 500, zIndex: 112},
  {user_id: 1, board_id: 2, title: "Vernazza Cinque Terre, Italy", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-gold_x1xesf.png", note_color: "", img_url: "http://res.cloudinary.com/arkean/image/upload/w_166,h_250,c_fill,g_face/v1468013861/ougqnzlippwbi9opy9i4.jpg", posX: 1070, posY: 3, zIndex: 113, tags: 'water, italy, town, boats, pretty, scenic'},
  {user_id: 1, board_id: 2, title: "Manarola, Italy", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-purple_wndk5t.png", note_color: "", img_url: "http://res.cloudinary.com/arkean/image/upload/w_250,h_166,c_fill,g_face/v1468013782/ldqvh68u8du3dx3qnnlf.jpg", posX: 1182, posY: 46, zIndex: 114, tags: 'manarola, italy, cliffs, water, town'},
  {user_id: 1, board_id: 2, title: "Coliseum Rome, Italy", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "", img_url: "http://res.cloudinary.com/arkean/image/upload/w_166,h_250,c_fill,g_face/v1468013905/mak2saljq0ucoiatokke.jpg", posX: 1289, posY: 160, zIndex: 115, tags: 'coliseum, rome, italy, touristy'},
  {user_id: 1, board_id: 2, title: "Pisa, Italy", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-red_jjgvcx.png", note_color: "", img_url: "http://res.cloudinary.com/arkean/image/upload/w_250,h_166,c_fill,g_face/v1468013811/tfzjwgum59xq034sie8e.jpg", posX: 1018, posY: 211, zIndex: 116, tags: 'tower, pisa, italy, pretty'},
  {user_id: 1, board_id: 3, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinay.com/arkean/image/upload/v1467825753/sn-green_cle3ps.png", img_url: nil, posX: 431, posY: 4, zIndex: 9},
  {user_id: 1, board_id: 3, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-burnt-orange_uuj2zx.png", img_url: nil, posX: 595, posY: 5, zIndex: 10},
  {user_id: 1, board_id: 2, title: "Japan", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-red_jjgvcx.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-purple-stripe_qho3fo.png", img_url: nil, posX: 305, posY: 374, zIndex: 104},
  {user_id: 3, board_id: 3, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-purple_ixwtyk.png", img_url: nil, posX: 411, posY: 349, zIndex: 23},
  {user_id: 1, board_id: 3, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-brown-decorated_zlcljd.png", img_url: nil, posX: 772, posY: 5, zIndex: 11},
  {user_id: 4, board_id: 3, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825754/st-white_kxwyau.png", img_url: nil, posX: 496, posY: 177, zIndex: 17},
  {user_id: 1, board_id: 3, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-blue_gv4cjs.png", img_url: nil, posX: 946, posY: 4, zIndex: 12},
  {user_id: 1, board_id: 3, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-pink-stripe_bqkv86.png", img_url: nil, posX: 1121, posY: 7, zIndex: 13},
  {user_id: 4, board_id: 3, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/st-flowers_k1hjcq.png", img_url: nil, posX: 326, posY: 174, zIndex: 18},
  {user_id: 4, board_id: 3, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-fancy_zeu6ii.png", img_url: nil, posX: 1035, posY: 177, zIndex: 14},
  {user_id: 3, board_id: 3, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/st-faded-stripe_iikpya.png", img_url: nil, posX: 953, posY: 352, zIndex: 19},
  {user_id: 4, board_id: 3, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-gold_nc2k3g.png", img_url: nil, posX: 862, posY: 176, zIndex: 15},
  {user_id: 3, board_id: 3, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-purple-checkered_etg2ah.png", img_url: nil, posX: 772, posY: 351, zIndex: 21},
  {user_id: 3, board_id: 3, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-purple-stripe_qho3fo.png", img_url: nil, posX: 592, posY: 350, zIndex: 22},
  {user_id: 3, board_id: 3, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-pink-stripe_bqkv86.png", img_url: nil, posX: 232, posY: 346, zIndex: 25},
  {user_id: 1, board_id: 5, title: "Corsica", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-purple_wndk5t.png", note_color: "", img_url: "http://res.cloudinary.com/arkean/image/upload/w_250,h_166,c_fill,g_face/v1468024024/szcosa5jmnbkmndv885t.jpg", posX: 532, posY: 130, zIndex: 117, tags:'cliffs, water, town, awesome, corsica'},
  {user_id: 1, board_id: 2, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "", img_url: "http://res.cloudinary.com/arkean/image/upload/w_166,h_250,c_fill,g_face/v1468014112/jhotldz3bkvkktuzapob.jpg", posX: 163, posY: 339, zIndex: 103, tags:'blossom, water, japan, gardens, amazing'},
  {user_id: 1, board_id: 2, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-red_jjgvcx.png", note_color: "", img_url: "http://res.cloudinary.com/arkean/image/upload/w_250,h_166,c_fill,g_face/v1468014071/yddivdgucgainquiidcb.jpg", posX: 93, posY: 524, zIndex: 86, tags:'blossom, water, japan, gardens'},
  {user_id: 1, board_id: 2, title: "", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-green_vkb5ve.png", note_color: "", img_url: "http://res.cloudinary.com/arkean/image/upload/w_166,h_250,c_fill,g_face/v1468014035/u7eg1ljbjcwaikfxxcjl.jpg", posX: 342, posY: 495, zIndex: 78, tags: 'tower, japan, tourist, awesome, temple'},
  {user_id: 1, board_id: 2, title: "Amazon Rainforest", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-black_l5ztxz.png", note_color: "", img_url: "http://res.cloudinary.com/arkean/image/upload/w_250,h_166,c_fill,g_face/v1468014295/muh1uwmclhyluf15wsvh.jpg", posX: 728, posY: 365, zIndex: 110, tags:"water, amazon rainforest, beautiful, forest, pretty"},
  {user_id: 1, board_id: 2, title: "Amazon Rainforest", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-green_vkb5ve.png", note_color: "", img_url: "http://res.cloudinary.com/arkean/image/upload/w_166,h_250,c_fill,g_face/v1468014268/iuvdmz0nn9fal24a7h90.jpg", posX: 560, posY: 224, zIndex: 108, tags:"waterfall, amazon rainforest, beautiful, forest, amazing"},
  {user_id: 1, board_id: 2, title: "Amazon Rainforest", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "", img_url: "http://res.cloudinary.com/arkean/image/upload/w_250,h_166,c_fill,g_face/v1468014218/zwh5a2qgfwoijdqzht1y.jpg", posX: 703, posY: 199, zIndex: 109, tags:"waterfall, amazon rainforest, beautiful, pretty"},
  {user_id: 1, board_id: 2, title: "Italy", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-black_l5ztxz.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-brown-decorated_zlcljd.png", img_url: nil, posX: 1174, posY: 379, zIndex: 117, tags: ['italy']},
  {user_id: 1, board_id: 2, title: "Amazon Rainforest", body: "", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-purple_wndk5t.png", note_color: "", img_url: "http://res.cloudinary.com/arkean/image/upload/w_250,h_166,c_fill,g_face/v1468014332/jylrvu6esvantox4ndci.jpg", posX: 574, posY: 456, zIndex: 111, tags:"waterfall, amazon rainforest, beautiful, forest"},
  {user_id: 1, board_id: 5, title: "Gym Membership", body: "Should look into some local gyms around here", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-green_vkb5ve.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825754/st-white_kxwyau.png", img_url: nil, posX: 188, posY: 164, zIndex: 135, tags:['gym', 'topics', 'remember', 'reminder', 'urgent']},
  {user_id: 2, board_id: 5, title: "FOOD", body: "What food is good in the bay area? I need to find out!", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-blue_gyqktr.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-purple_ixwtyk.png", img_url: nil, posX: 221, posY: 453, zIndex: 133, tags:['food', 'social', 'topics']},
  {user_id: 4, board_id: 5, title: "i want to go to...", body: "...ITALY!", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-blue_gyqktr.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-purple-stripe_qho3fo.png", img_url: nil, posX: 530, posY: 273, zIndex: 131, tags:'vacation, one day, travel, italy, urgent, reminder'},
  {user_id: 4, board_id: 5, title: "Game night?", body: "What food should I bring?", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-blue_gyqktr.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-purple_ixwtyk.png", img_url: nil, posX: 987, posY: 239, zIndex: 122, tags: 'games, fun, party, social, food, gathering'},
  {user_id: 3, board_id: 5, title: "Me too.", body: "I want to go to italy, as well!", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-blue_gyqktr.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-purple-stripe_qho3fo.png", img_url: nil, posX: 711, posY: 286, zIndex: 130, tags:'vacation, one day, travel, italy, urgent'},
  {user_id: 1, board_id: 5, title: "Game Night!", body: "My place. Tuesday. BE THERE!", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-blue_gyqktr.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-blue_gv4cjs.png", img_url: nil, posX: 909, posY: 162, zIndex: 121, tags: 'games, fun, party, social, food, gathering'},
  {user_id: 1, board_id: 5, title: "Cheesecake", body: "Its always a great discussion topic to have. Is it a cake or a pie? I say cake, and so did the people at the cheesecake factory. They should know, right?", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825732/tack-blue_gyqktr.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825753/sn-purple-stripe_qho3fo.png", img_url: nil, posX: 432, posY: 497, zIndex: 127, tags: 'cheesecake, topics, cake, pie'},

  {user_id: 3, board_id: 5, title: "Game night...", body: "I'll bring a game. Tales of Arabian Nights! You will all love it!", pin_color: "http://res.cloudinary.com/arkean/image/upload/v1467825733/tack-teal_padg1c.png", note_color: "http://res.cloudinary.com/arkean/image/upload/v1467825758/st-green-stripe_iwaoyx.png", img_url: nil, posX: 1017, posY: 74, zIndex: 134, tags: 'games, fun, party, social'}
])

Team.create!([
  {team_member_id: 4, board_id: 1},
  {team_member_id: 3, board_id: 1},
  {team_member_id: 1, board_id: 1},
  {team_member_id: 1, board_id: 2},
  {team_member_id: 2, board_id: 2},
  {team_member_id: 3, board_id: 2},
  {team_member_id: 4, board_id: 2},
  {team_member_id: 5, board_id: 2},
  {team_member_id: 1, board_id: 3},
  {team_member_id: 4, board_id: 3},
  {team_member_id: 3, board_id: 3},
  {team_member_id: 1, board_id: 4},
  {team_member_id: 1, board_id: 5},
  {team_member_id: 2, board_id: 5},
  {team_member_id: 4, board_id: 5},
  {team_member_id: 3, board_id: 5}
])
User.create!([
  {first_name: "Barry", last_name: "James", session_token: "MAkQYlbkuGCNg8dgv4T6ag", password_digest: "$2a$10$PIYrwMHyDRm8a8eAeh1yM.bSASHQn0PIbn.2oUrynGizmemdgY0mq", email_address: "barry@fake.com", user_pic_url: "http://res.cloudinary.com/arkean/image/upload/w_250,h_250,c_fill,g_face/v1468007903/m7anwjshnyylvftwpm3e.jpg", user_initials: "BJ"},
  {first_name: "Jayson", last_name: "Young", session_token: "A6mt2pH08jdiZpL51cyZWw", password_digest: "$2a$10$vWtC6iiCh87DpYUN2EI2ieVfneMJjwAHQZ2rfdnFzIbeM/n1./Gma", email_address: "jaysonyoung@fake.com", user_pic_url: "http://res.cloudinary.com/arkean/image/upload/w_250,h_250,c_fill,g_face/v1468007617/xwp6ccbbfdircisgu0a2.png", user_initials: "JY"},
  {first_name: "Caitlin", last_name: "R.", session_token: "7un_TUJ1SJRNzQ-P922oLQ", password_digest: "$2a$10$YR6jQTJBwOxH3EimS9B.De1C3eQja6NwyCaHo0GfGziw3NxsS7lxO", email_address: "caitlin@fake.com", user_pic_url: "http://res.cloudinary.com/arkean/image/upload/w_250,h_250,c_fill,g_face/v1468007766/xc0envljvkbgofuwytv1.png", user_initials: "CR"},
  {first_name: "Jon", last_name: "M.", session_token: "aSxs9Vg23nYGQ_B2BY7vdA", password_digest: "$2a$10$H2ymZy4WeLmYipLfCEPbO.YvYWFVmYGN1fTQUc5qN2wuqNvJJbyy.", email_address: "jonm@fake.com", user_pic_url: "http://res.cloudinary.com/arkean/image/upload/w_250,h_250,c_fill,g_face/v1468007818/llc305fxyhmea41phzne.png", user_initials: "JM"},
  {first_name: "Demo", last_name: "User", session_token: "mcITNByXrlMwdGKdueq_GA", password_digest: "$2a$10$e7rltEcGUsYe4Zi4Khz6feSukx5iEFhHkUOQNc5Hjgp28LnqzseXO", email_address: "Demo", user_pic_url: "http://res.cloudinary.com/arkean/image/upload/w_250,h_250,c_fill,g_face/v1468007521/oo0iyilbibua2lmqqpqt.png", user_initials: "DU"}
])
UserPreference.create!([
  {user_id: 2, user_color: "#40b8bf", nav_color: "#2d8653", home_board: "http://res.cloudinary.com/arkean/image/upload/c_scale,h_800/v1467909597/corkboard-teal_pjjw5e.jpg"},
  {user_id: 3, user_color: "#b3bbe6", nav_color: "#772d86", home_board: "http://res.cloudinary.com/arkean/image/upload/c_scale,h_800/v1467909599/corkboard-purple_v4vmlu.jpg"},
  {user_id: 5, user_color: "yellow", nav_color: "#89bf40", home_board: "http://res.cloudinary.com/arkean/image/upload/c_scale,h_800/v1467909589/corkboard-green_jby46h.jpg"},
  {user_id: 1, user_color: "#79d28d", nav_color: "#5540bf", home_board: "http://res.cloudinary.com/arkean/image/upload/c_scale,h_800/v1467909599/corkboard-purple_v4vmlu.jpg"},
  {user_id: 4, user_color: "blue", nav_color: "#4092bf", home_board: "http://res.cloudinary.com/arkean/image/upload/c_scale,h_800/v1467679359/corkboard_x2gpyn.jpg"}
])