<?php
/**
 * Plugin Name: Captain Baltimore External Links in New Tab
 * Description: Forces all external links on the front end to open in a new tab (target="_blank" with rel="noopener"), so visitors are not sent away from the site.
 * Version: 1.0.0
 * Author: Captain Baltimore
 */
if (!defined('ABSPATH')) {
    exit;
}
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script(
        'cb-external-links',
        plugins_url('external-links.js', __FILE__),
        [],
        '1.0.0',
        true
    );
});
