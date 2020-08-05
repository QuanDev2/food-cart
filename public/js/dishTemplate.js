(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['customerAdminItem'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr>\n    <td data-label=\"username\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"username") || (depth0 != null ? lookupProperty(depth0,"username") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data,"loc":{"start":{"line":2,"column":30},"end":{"line":2,"column":42}}}) : helper)))
    + "</td>\n    <td data-label=\"name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"customerName") || (depth0 != null ? lookupProperty(depth0,"customerName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customerName","hash":{},"data":data,"loc":{"start":{"line":3,"column":26},"end":{"line":3,"column":42}}}) : helper)))
    + "</td>\n    <td data-label=\"email\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":4,"column":27},"end":{"line":4,"column":36}}}) : helper)))
    + "</td>\n    <td data-label=\"phone-number\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"phoneNumber") || (depth0 != null ? lookupProperty(depth0,"phoneNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phoneNumber","hash":{},"data":data,"loc":{"start":{"line":5,"column":34},"end":{"line":5,"column":49}}}) : helper)))
    + "</td>\n</tr>";
},"useData":true});
templates['sellerAdminItem'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr>\n    <td data-label=\"username\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"username") || (depth0 != null ? lookupProperty(depth0,"username") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data,"loc":{"start":{"line":2,"column":30},"end":{"line":2,"column":42}}}) : helper)))
    + "</td>\n    <td data-label=\"name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"sellerName") || (depth0 != null ? lookupProperty(depth0,"sellerName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sellerName","hash":{},"data":data,"loc":{"start":{"line":3,"column":26},"end":{"line":3,"column":40}}}) : helper)))
    + "</td>\n    <td data-label=\"email\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":4,"column":27},"end":{"line":4,"column":36}}}) : helper)))
    + "</td>\n    <td data-label=\"phone-number\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"phoneNumber") || (depth0 != null ? lookupProperty(depth0,"phoneNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phoneNumber","hash":{},"data":data,"loc":{"start":{"line":5,"column":34},"end":{"line":5,"column":49}}}) : helper)))
    + "</td>\n</tr>";
},"useData":true});
templates['customerMenu'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"item\" class=\"customer-name\" data-customerID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"customerID") || (depth0 != null ? lookupProperty(depth0,"customerID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customerID","hash":{},"data":data,"loc":{"start":{"line":1,"column":57},"end":{"line":1,"column":71}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"customerName") || (depth0 != null ? lookupProperty(depth0,"customerName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"customerName","hash":{},"data":data,"loc":{"start":{"line":1,"column":73},"end":{"line":1,"column":89}}}) : helper)))
    + "\n</div>";
},"useData":true});
templates['managePostDish'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<tr data-postID="
    + alias4(((helper = (helper = lookupProperty(helpers,"postID") || (depth0 != null ? lookupProperty(depth0,"postID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postID","hash":{},"data":data,"loc":{"start":{"line":1,"column":16},"end":{"line":1,"column":26}}}) : helper)))
    + ">\n  <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"sellerName") || (depth0 != null ? lookupProperty(depth0,"sellerName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sellerName","hash":{},"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":2,"column":20}}}) : helper)))
    + "</td>\n  <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"dishName") || (depth0 != null ? lookupProperty(depth0,"dishName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dishName","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":18}}}) : helper)))
    + "</td>\n  <td>\n    <div class=\"ui right labeled input price-input\">\n      <label for=\"amount\" class=\"ui label\">$</label>\n      <input type=\"text\" placeholder=\"10\" id=\"amount\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":7,"column":61},"end":{"line":7,"column":70}}}) : helper)))
    + "\" />\n      <div class=\"ui basic label\">.00</div>\n    </div>\n  </td>\n  <td>\n    <div class=\"ui positive button update-btn\">Update</div>\n  </td>\n  <td>\n    <div class=\"ui negative button delete-btn\">Delete</div>\n  </td>\n</tr>";
},"useData":true});
templates['orderItem'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"item order-item\" data-postID=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"postID") || (depth0 != null ? lookupProperty(depth0,"postID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postID","hash":{},"data":data,"loc":{"start":{"line":1,"column":42},"end":{"line":1,"column":52}}}) : helper)))
    + "\">\n  <div class=\" ui smaller image\">\n    <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"imgUrl") || (depth0 != null ? lookupProperty(depth0,"imgUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgUrl","hash":{},"data":data,"loc":{"start":{"line":3,"column":13},"end":{"line":3,"column":23}}}) : helper)))
    + " />\n  </div>\n  <div class=\"content\">\n    <div class=\"header\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"dishName") || (depth0 != null ? lookupProperty(depth0,"dishName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dishName","hash":{},"data":data,"loc":{"start":{"line":6,"column":24},"end":{"line":6,"column":36}}}) : helper)))
    + "</div>\n    <div class=\"meta\">\n      <span class=\"price\">$"
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":8,"column":27},"end":{"line":8,"column":36}}}) : helper)))
    + "</span>\n      <span class=\"quantity\">Qty: "
    + alias4(((helper = (helper = lookupProperty(helpers,"quantity") || (depth0 != null ? lookupProperty(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":9,"column":34},"end":{"line":9,"column":46}}}) : helper)))
    + "</span>\n    </div>\n  </div>\n  <i class=\"x icon\"></i>\n</div>";
},"useData":true});
templates['dish'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"dish\" data-postID="
    + alias4(((helper = (helper = lookupProperty(helpers,"postID") || (depth0 != null ? lookupProperty(depth0,"postID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postID","hash":{},"data":data,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":40}}}) : helper)))
    + ">\n  <div class=\"info\">\n    <div class=\"dish-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"dishName") || (depth0 != null ? lookupProperty(depth0,"dishName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dishName","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":39}}}) : helper)))
    + "</div>\n    <div class=\"seller-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"sellerName") || (depth0 != null ? lookupProperty(depth0,"sellerName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sellerName","hash":{},"data":data,"loc":{"start":{"line":4,"column":29},"end":{"line":4,"column":43}}}) : helper)))
    + "</div>\n    <div class=\"dish-price\">$"
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":5,"column":29},"end":{"line":5,"column":38}}}) : helper)))
    + "</div>\n  </div>\n  <img src="
    + alias4(((helper = (helper = lookupProperty(helpers,"imgUrl") || (depth0 != null ? lookupProperty(depth0,"imgUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgUrl","hash":{},"data":data,"loc":{"start":{"line":7,"column":11},"end":{"line":7,"column":21}}}) : helper)))
    + " alt=\"\" />\n  <div class=\"checkout-btn-container\" data-error=\"Error\">\n    <div class=\"quantity-container\">\n      <label class=\"qty-label\" style=\"margin-right: 1em; font-weight: 600;\">Quantity</label>\n      <div class=\"ui input focus\">\n        <input class=\"quantity-input\" type=\"text\" placeholder=\"5\" value=\"1\" max="
    + alias4(((helper = (helper = lookupProperty(helpers,"quantity") || (depth0 != null ? lookupProperty(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":12,"column":80},"end":{"line":12,"column":92}}}) : helper)))
    + " />\n      </div>\n    </div>\n    <div class=\"cart-btn ui button blue\" tabindex=\"0\">\n      Add to cart\n    </div>\n  </div>\n</div>";
},"useData":true});
templates['sellerMenu'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"item\" id=\"seller-names\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"sellerName") || (depth0 != null ? lookupProperty(depth0,"sellerName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sellerName","hash":{},"data":data,"loc":{"start":{"line":1,"column":36},"end":{"line":1,"column":50}}}) : helper)))
    + "</div>";
},"useData":true});
templates['dishMenu'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"item\" id=\"dish-names\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"dishName") || (depth0 != null ? lookupProperty(depth0,"dishName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"dishName","hash":{},"data":data,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":46}}}) : helper)))
    + "</div>";
},"useData":true});
})();