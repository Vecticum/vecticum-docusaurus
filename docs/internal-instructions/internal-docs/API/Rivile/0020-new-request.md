# New request

## Open new request

<ul>

  <li>
    Select "New Request":
    <figure>
      ![](/assets/instruction-images/postman/rivile/select-new.png)
      <figcaption>
        <p>button for new request</p>
      </figcaption>
    </figure>
  </li>

  <li>
    Select "HTTP":
    <figure>
      ![](/assets/instruction-images/postman/rivile/select-http-request.png)
      <figcaption>
        <p>button for new http request</p>
      </figcaption>
    </figure>
  </li>

  <li>
    Now we see the window of new request.
    <figure>
      ![](/assets/instruction-images/postman/rivile/select-http-request.png)
      <figcaption>
        <p>button for new http request</p>
      </figcaption>
    </figure>
    Let configure it!
  </li>
</ul>

## Configure request

Let's say we want to check the list of existing objects (probably as dimensions) in Rivile. For example, let's get a list of some purchase objects.

### Get instruction from Rivile official documentation site

To start, we find a necessary instructions at documentation page:

<LinkToAnotherPage path="https://gidas.rivile.lt/internetiniai_moduliai/api_rest/get_n06_list" text="Rivile API v2: GET_N06_LIST"/>

Now we can start build a request.

### URL and Method

Fistly we need to know Rivile API address. Usually it always be the same:

<figure>
      ![](/assets/instruction-images/postman/rivile/rivile_address.png)
      <figcaption>
        <p>address of Rivile API</p>
      </figcaption>
    </figure>

We see that we need to use command POST with URL *https://api.manorivile.lt/client/v2*

In Postman you should change command GET to POST and copy url into address bar:

<figure>
  ![](/assets/instruction-images/postman/rivile/rivile-change-get-to-post.png)
  <figcaption>
    <p>changing method parameter GET to POST</p>
  </figcaption>
</figure>

### Headers

Next thing we need to do is to configure headers of request.
Instruction gives us following information:

<figure>
  ![](/assets/instruction-images/postman/rivile/rivile-headers.png)
  <figcaption>
    <p>description of headers of request</p>
  </figcaption>
</figure>

Let transfer these settings to Postman:

<figure>
  ![](/assets/instruction-images/postman/rivile/rivile-configured-headers.png)
  <figcaption>
    <p>configured headers will look like this</p>
  </figcaption>
</figure>

<ul>
<li>ApiKey - unique key that you should get from client</li>
<li>Content-Type - we should specify, which format we will send (JSON or XML). Vecticum uses JSON</li>
<li>Accept - we should specify if we want to get JSON or XML as a result. At Vecticum we use JSON</li>
</ul>

P.S. These settings usually will be always the same for any request to Rivile. To save your time, you can save your request and duplicate it for future request to avoid filling the same information again and again.
Of course, it's always a good idea to double-check these settings when starting a new request.
### Body

After URL and Headers are done, we should generate request data, what we want to get. 
Body contains:
<ul>
<li>method - what we want to do. For our example, it will be GET_N06_LIST</li>
<li>params - here we can specify further instructions, for example add filter</li>
</ul>

Rivile explanation:

<figure>
  ![](/assets/instruction-images/postman/rivile/rivile-body.png)
</figure>

Let's scroll down Rivile instructions and find an example:

<figure>
  ![](/assets/instruction-images/postman/rivile/rivile-body-example.png)
</figure>

Navigate to next tab called Body, select raw instead of none and copy-paste body example:
<figure>
  ![](/assets/instruction-images/postman/rivile/postman-body-example.png)
</figure>

Request is configured. Press "Send" button and you should get result.

If you done everything correctly, probably you will get empty result:

<figure>
  ![](/assets/instruction-images/postman/rivile/empty-result.png)
  <figcaption>
    <p>empty results when configuration is good</p>
  </figcaption>
</figure>

We can see that above the result we see status message - **200 OK**. Code 200 means that request was successful.
To get results of first 100 records, just remove the filter and keep body simple:

<figure>
  ![](/assets/instruction-images/postman/rivile/body-without-filters.png)
</figure>

## Errors possible
In case you got Error code and code is not 200, possible problems can be:

<ul>
<li>Method is wrong</li>
<figure>
  ![](/assets/instruction-images/postman/rivile/error-does-not-exist.png)
</figure>
In this case just check if you typed method correctly

<li>API key is bad</li>
<figure>
  ![](/assets/instruction-images/postman/rivile/bad-api-key.png)
</figure>
Probably there is a extra space in API key or someone gave you wrong API Key

<li>API user don't have necessary rights</li>
<figure>
  ![](/assets/instruction-images/postman/rivile/no-permission.png)
</figure>
Current API user don't have rights to execute this method. Probably this is the wrong method that you don't need or client should give an access to API user for the method.


</ul>




