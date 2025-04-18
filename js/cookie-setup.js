(function () {
  const oneDayExpire = new Date(Date.now() + 86400 * 1000).toUTCString();

  // Helper to set cookie
  const setCookie = (name, value) => {
    document.cookie = `${name}=${value}; path=/; expires=${oneDayExpire}`;
  };

  // Advertisement Cookies
  setCookie("_ljtrtb_71", "ad_demo_1");
  setCookie("ev_sync_dd", "ad_demo_2");
  setCookie("pixel", "ad_demo_3");
  setCookie("POWR_PRODUCTION", "ad_demo_4");
  setCookie("__gsas", "ad_demo_5");
  setCookie("__adroll_consent_params", "ad_demo_6");
  setCookie("_ttp", "ad_demo_7");
  setCookie("pid_short", "ad_demo_8");
  setCookie("pl_user_id", "ad_demo_9");
  setCookie("criteo_write_test", "ad_demo_10");
  setCookie("jpxumatched", "ad_demo_11");
  setCookie("jpxumaster", "ad_demo_12");
  setCookie("ph", "ad_demo_13");
  setCookie("gcma", "ad_demo_14");
  setCookie("flashtalkingad1", "ad_demo_15");

  // Performance Cookies
  setCookie("_gs", "perf_demo_1");
  setCookie("form_key", "perf_demo_2");
  setCookie("marketo_utm_medium", "perf_demo_3");
  setCookie("lr_uf_", "perf_demo_4");
  setCookie("locationCookie", "perf_demo_5");
  setCookie("lz_userid", "perf_demo_6");
  setCookie("mf_cok_local_no", "perf_demo_7");
  setCookie("pid_signature", "perf_demo_8");
  setCookie("plentyID", "perf_demo_9");
  setCookie("qb_generic", "perf_demo_10");
  setCookie("_uetvid", "perf_demo_11");
  setCookie("_uetsid", "perf_demo_12");
  setCookie("AWSELBCORS", "perf_demo_13");
  setCookie("AWSALB", "perf_demo_14");
  setCookie("visitor_id838373", "perf_demo_15");

  // Functional Cookies
  setCookie("ct_mouse_moved", "func_demo1");
  setCookie("callpage-widget-version", "func_demo2");
  setCookie("messaging_plugin_*", "func_demo3");
  setCookie("cmplz_functional", "func_demo4");
  setCookie("spbc_secfw_ip_wl", "func_demo5");
  setCookie("tt_csrf_token", "func_demo6");
  setCookie("wpmReferrer", "func_demo7");
  setCookie("_hjSessionRejected", "func_demo8");
  setCookie("_sn_n", "func_demo9");
  setCookie("uesign", "func_demo10");
  setCookie("shopengine_recent_viewed_product", "func_demo11");
  setCookie("li_gc", "func_demo12");
  setCookie("twk_idm_key", "func_demo13");
  setCookie("mgrefby", "func_demo14");
  setCookie("mgref", "func_demo15");
  setCookie("session_id", "func_demo16");

  // Essential Cookies
  setCookie("_secure_account_session_id", "ess_demo3");
  setCookie("server_session_id", "ess_demo4");
  setCookie("TS01e1aeda", "ess_demo5");
  setCookie("TS01e4c76e", "ess_demo6");
  setCookie("TS01e26750", "ess_demo7");
  setCookie("TS01e48685", "ess_demo8");
  setCookie("cookielawinfo-checkbox-non-necessari", "ess_demo9");
  setCookie("TS01e309c2", "ess_demo10");
  setCookie("cookielawinfo-checkbox-no-necesarias", "ess_demo11");
  setCookie("TS01e466f2", "ess_demo12");
  setCookie("cookielawinfo-checkbox-non-classe", "ess_demo13");
  setCookie("cookielawinfo-checkbox-noedvendig", "ess_demo14");
  setCookie("cookielawinfo-checkbox-non-classificati", "ess_demo15");
  setCookie("exp_csrf_token", "ess_demo16");
  setCookie("YII_CSRF_TOKEN", "ess_demo17");
  setCookie("__csrf_token-2", "ess_demo18");
  setCookie("__csrf_token-1", "ess_demo19");
  setCookie("csrf_https-contao_csrf_token", "ess_demo20");

  // Other Cookies
  setCookie("csrf_token", "local_value_0");
  setCookie("same_domain_cookie_1","local_value_1");
  setCookie("same_domain_cookie_2","local_value_2");
  setCookie("same_domain_cookie_3","local_value_3");
  setCookie("same_domain_cookie_4","local_value_4");
  setCookie("test_cookie__1,local","local_value_11");
  setCookie("test_cookie__2","local_value_22");
  setCookie("test_cookie__3","local_value_33");
  setCookie("test_cookie__4","local_value_44");
  setCookie("main_domain_cookie_1","main_domain_cookie_value_1");
  setCookie("main_domain_cookie_2","main_domain_cookie_value_2");

  // Add more using: setCookie("name", "value");
})();
